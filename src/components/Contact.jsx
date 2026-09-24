import React from "react";
import { Mail, Phone, ArrowUpRight, FileText, Code } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="section-container text-center">
        {/* Section Label */}
        <div className="section-tag-header justify-center">
          <span className="section-num font-mono">07</span>
          <span className="section-tag-divider">—</span>
          <span className="section-tag-title font-mono">CONTACT</span>
        </div>

        {/* Headline */}
        <h2 className="contact-headline">Let's build something together.</h2>

        <p className="contact-subtext">
          I'm open to internships, software engineering opportunities,
          collaborations, and interesting projects.
        </p>

        {/* Primary Contact Action Cards */}
        <div className="contact-actions-grid">
          {/* Email Button Card */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hamshaverthinik@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card email-card"
          >
            <div className="contact-card-icon">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label font-mono">EMAIL DIRECTLY</span>
              <span className="contact-card-value font-mono">
                hamshaverthinik@gmail.com
              </span>
            </div>
            <ArrowUpRight className="contact-card-arrow" />
          </a>

          {/* Phone Button Card */}
          <a href="tel:+918610272436" className="contact-card phone-card">
            <div className="contact-card-icon">
              <Phone className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label font-mono font-bold">CALL / PHONE</span>
              <span className="contact-card-value font-mono">+91 8610272436</span>
            </div>
            <ArrowUpRight className="contact-card-arrow" />
          </a>
        </div>

        {/* Secondary Social Links Grid */}
        <div className="contact-social-grid">
          <a
            href="https://github.com/Achu-24"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>

          <a
            href="https://leetcode.com/u/Hamshaverthini/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <Code className="w-4 h-4 mr-2 text-cyan-400" />
            <span>LeetCode</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>

          <a
            href="https://www.linkedin.com/in/hamshaverthini/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <svg className="w-4 h-4 mr-2 fill-current text-cyan-400" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.262-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>

          <a
            href="/Hamshaverthini.docx.pdf"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <FileText className="w-4 h-4 mr-2 text-cyan-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}
