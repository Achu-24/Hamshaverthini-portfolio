import React, { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-canvas-container" aria-hidden="true">
      {/* Dark base & radial glow */}
      <div className="bg-radial-gradient" />
      
      {/* Mouse cursor spotlight */}
      <div
        className="bg-mouse-spotlight"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Grid Pattern */}
      <div className="bg-grid-pattern" />

      {/* Subtle Noise / Grain */}
      <div className="bg-noise-overlay" />
    </div>
  );
}
