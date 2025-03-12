"use client";

import { Share2, Check, FileDown } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import html2canvas from 'html2canvas-pro';
import jsPDF from "jspdf";

export default function FloatingShareButton() {
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the user is on a mobile device
        setIsMobile(window.innerWidth < 500);
    }, []);

    const handleShare = useCallback(async () => {
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Resume-Janmejay",
                    text: "Janmejay",
                    url: url
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            navigator.clipboard.writeText(url)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch(err => console.error("Error copying:", err));
        }
    }, []);

    const generatePDF = async () => {
        const element = document.body; // Capture the whole page, or use a specific div like `document.getElementById("resume")`
        const canvas = await html2canvas(element, { scale: 2, });
        const imgData = canvas.toDataURL("image/png");
    
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("Resume-Janmejay.pdf");
      };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
        <button
            onClick={handleShare}
            className={`flex items-center gap-2 ${
                isMobile ? "p-4 animate-bounce" : "px-4 py-2 animate-bounce"
            } bg-blue-600 text-white rounded-full shadow-lg transition hover:bg-blue-700`}
        >
            {copied ? <Check size={24} /> : <Share2 size={24} />}
            <span className="hidden sm:inline">Share</span>
            
        </button>
        {/* Generate PDF Button */}
            {/* <button
                className="flex items-center gap-2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                onClick={generatePDF}
                >
                <FileDown className="w-6 h-6" />
                <span className="hidden sm:inline">Download PDF</span>
            </button> */}
        </div>
    );
}
