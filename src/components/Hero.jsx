import React from "react";
import { ArrowUpRight, ChevronDown, Sparkles, Terminal, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Eyebrow / Status Tag */}
        <div className="hero-eyebrow-wrapper">
          <span className="status-indicator">
            <span className="status-dot" />
            <span className="status-text font-mono">AVAILABLE FOR ROLES</span>
          </span>
          <span className="eyebrow-divider">•</span>
          <span className="eyebrow-text">HELLO, I'M</span>
        </div>

        {/* Hero Headline Name */}
        <h1 className="hero-title">
          Hamshaverthini <span className="title-accent">K</span>
        </h1>

        {/* Subtitle / Role Tag */}
        <div className="hero-role-wrapper">
          <div className="hero-role-badge">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2 inline" />
            <h2 className="hero-role">AI Full Stack Developer</h2>
          </div>
        </div>

        {/* Personal Statement */}
        <p className="hero-description">
          Full-stack developer building responsive, AI-powered applications using
          React, Node.js, FastAPI, and MongoDB for document processing,
          intelligent workflows, and data-driven user experiences.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a
            href="https://github.com/Achu-24"
            target="_blank"
            rel="noreferrer"
            className="button primary-btn"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 inline" />
          </a>

          <a
            href="https://leetcode.com/u/Hamshaverthini/"
            target="_blank"
            rel="noreferrer"
            className="button secondary-btn"
          >
            <span>LeetCode</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 inline" />
          </a>

          <a
            href="https://www.linkedin.com/in/hamshaverthini/"
            target="_blank"
            rel="noreferrer"
            className="button secondary-btn"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 inline" />
          </a>

          <a href="#contact" className="button secondary-btn">
            <span>Contact</span>
          </a>

          <a
            href="/Hamshaverthini.docx.pdf"
            target="_blank"
            rel="noreferrer"
            className="button secondary-btn highlight-btn"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 inline" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About Section">
        <span className="scroll-text font-mono">SCROLL TO EXPLORE</span>
        <div className="scroll-line">
          <span className="scroll-beam" />
        </div>
      </a>
    </section>
  );
}
