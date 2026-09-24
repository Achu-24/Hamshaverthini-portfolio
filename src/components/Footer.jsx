import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <p className="footer-copyright font-mono">© 2026 Hamshaverthini K</p>
        
        <p className="footer-tech font-mono text-slate-500">
          Built with React + Vite
        </p>

        <button
          onClick={scrollToTop}
          className="back-to-top-btn font-mono"
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 ml-1 inline" />
        </button>
      </div>
    </footer>
  );
}
