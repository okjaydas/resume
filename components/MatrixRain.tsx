"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Single characters: binary, katakana, dev symbols ─── */
const CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}()<>/=;:+-*&|~$#@!?";

/* ─── Code keywords & syntax from Java, C#, Python, AI/ML ─── */
const KEYWORDS = [
  // Java
  "public", "void", "class", "static", "final", "new", "try", "catch",
  "import", "return", "System", ".out", "Spring", "@Bean", "Stream",
  "HashMap", "throws", "extends", "implements",
  // C# / .NET
  "async", "await", "var", "LINQ", "Task", "yield", "using", "get",
  "set", "IEnumerable", "namespace", "delegate", "=>", "string",
  // Python
  "def", "self", "import", "from", "lambda", "yield", "print",
  "with", "as", "__init__", "pip", "dict", "list", "None", "True",
  // AI / ML
  "tensor", "model", ".fit()", "epoch", "loss", "grad", "Adam",
  "batch", "relu", "softmax", "embed", "LLM", "GPT", "bert",
  "torch", "numpy", "pandas", "predict", "train", "infer",
  // Cloud / Infra
  "k8s", "docker", "kafka", "redis", "azure", "aws", "lambda",
  "deploy", "pod", "node", "svc", "helm",
];

/** Pick either a single char or a keyword */
function pickRainChar(): string {
  // ~25% chance of a keyword
  if (Math.random() < 0.25) {
    return KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
  }
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

/* ─── Color palette matching the resume theme ─── */
const COLORS = [
  "rgba(129,140,248,", // --accent-blue  #818cf8
  "rgba(52,217,232,",  // --accent-cyan  #34d9e8
  "rgba(184,125,250,", // --accent-purple #b87dfa
];

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  length: number;
  colorIdx: number;
  fontSize: number;
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const columnsRef = useRef<Column[]>([]);
  const lastTimeRef = useRef<number>(0);

  /* ─── Build columns based on canvas width ─── */
  const initColumns = useCallback((width: number, height: number) => {
    const cols: Column[] = [];
    const fontSize = 13;
    const gap = fontSize + 2;
    const count = Math.floor(width / gap);

    for (let i = 0; i < count; i++) {
      const length = 6 + Math.floor(Math.random() * 14);
      const chars: string[] = [];
      for (let j = 0; j < length; j++) {
        chars.push(pickRainChar());
      }
      cols.push({
        x: i * gap + gap / 2,
        y: Math.random() * -height * 1.5,       // stagger start
        speed: 0.3 + Math.random() * 0.8,        // px per frame-ms
        chars,
        length,
        colorIdx: Math.floor(Math.random() * COLORS.length),
        fontSize,
      });
    }
    columnsRef.current = cols;
  }, []);

  /* ─── Draw loop ─── */
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, ts: number) => {
      const dt = lastTimeRef.current ? ts - lastTimeRef.current : 16;
      lastTimeRef.current = ts;

      // Fade the previous frame
      ctx.fillStyle = "rgba(15,23,42,0.12)";   // matches header dark bg
      ctx.fillRect(0, 0, width, height);

      const cols = columnsRef.current;

      for (let i = 0; i < cols.length; i++) {
        const col = cols[i];
        col.y += col.speed * dt * 0.06;

        const baseColor = COLORS[col.colorIdx];
        ctx.font = `${col.fontSize}px "Geist Mono", ui-monospace, monospace`;

        for (let j = 0; j < col.length; j++) {
          const charY = col.y - j * (col.fontSize + 2);
          if (charY < -col.fontSize || charY > height + col.fontSize) continue;

          // Head char is bright, rest fade out
          const progress = j / col.length;
          const alpha = j === 0 ? 0.9 : Math.max(0.04, 0.55 * (1 - progress));

          ctx.fillStyle = `${baseColor}${alpha})`;
          ctx.fillText(col.chars[j], col.x, charY);
        }

        // Randomly mutate a character for the "scramble" effect
        if (Math.random() < 0.03) {
          const idx = Math.floor(Math.random() * col.length);
          col.chars[idx] = pickRainChar();
        }

        // Reset column when it's fully off-screen
        if (col.y - col.length * (col.fontSize + 2) > height) {
          col.y = Math.random() * -height * 0.5;
          col.speed = 0.3 + Math.random() * 0.8;
          col.colorIdx = Math.floor(Math.random() * COLORS.length);
        }
      }

      animRef.current = requestAnimationFrame((t) => draw(ctx, width, height, t));
    },
    []
  );

  useEffect(() => {
    /* ─── Respect prefers-reduced-motion ─── */
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ─── Size canvas to parent ─── */
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initColumns(rect.width, rect.height);
      // Clear canvas on resize to avoid artifacts
      ctx.clearRect(0, 0, rect.width, rect.height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    /* ─── Start animation ─── */
    const parentEl = canvas.parentElement!;
    const rect = parentEl.getBoundingClientRect();
    animRef.current = requestAnimationFrame((t) =>
      draw(ctx, rect.width, rect.height, t)
    );

    /* ─── Pause when tab hidden ─── */
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animRef.current);
        lastTimeRef.current = 0;
      } else {
        const r = parentEl.getBoundingClientRect();
        animRef.current = requestAnimationFrame((t) =>
          draw(ctx, r.width, r.height, t)
        );
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [draw, initColumns]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.35,
      }}
    />
  );
}
