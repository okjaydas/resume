"use client";

import { Share2, Check } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

export default function FloatingShareButton() {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 500);
  }, []);

  const handleShare = useCallback(async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Janmejaya Das — Software Engineer",
          text: "Janmejaya Das — Software Engineer",
          url: url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => console.error("Error copying:", err));
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <button
        onClick={handleShare}
        className={`flex items-center gap-2 ${isMobile ? "p-3" : "px-4 py-2.5"
          } rounded-full shadow-lg transition-all duration-300`}
        style={{
          background: "rgba(99, 102, 241, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(99, 102, 241, 0.25)",
          color: "var(--text-secondary)",
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(99, 102, 241, 0.25)";
          e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.45)";
          e.currentTarget.style.color = "var(--text-primary)";
          e.currentTarget.style.boxShadow =
            "0 0 24px rgba(99, 102, 241, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(99, 102, 241, 0.15)";
          e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.25)";
          e.currentTarget.style.color = "var(--text-secondary)";
          e.currentTarget.style.boxShadow =
            "0 0 20px rgba(99, 102, 241, 0.1)";
        }}
      >
        {copied ? <Check size={20} /> : <Share2 size={20} />}
        <span className="hidden sm:inline text-sm font-medium">
          {copied ? "Copied!" : "Share"}
        </span>
      </button>
    </div>
  );
}
