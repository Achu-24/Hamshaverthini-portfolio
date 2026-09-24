import React from "react";
import { User, BookOpen, Code, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="section-container">
        {/* Editorial Layout Grid */}
        <div className="about-editorial-grid">
          {/* Left Column: Section Tag & Metadata */}
          <div className="about-left-col">
            <div className="section-tag-header">
              <span className="section-num font-mono">01</span>
              <span className="section-tag-divider">—</span>
              <span className="section-tag-title font-mono">ABOUT</span>
            </div>

            <div className="about-meta-box">
              <div className="meta-item">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <div>
                  <span className="meta-label">PROGRAM</span>
                  <p className="meta-val">B.Tech SPE (Kalvium UG)</p>
                </div>
              </div>

              <div className="meta-item">
                <Cpu className="w-4 h-4 text-slate-400" />
                <div>
                  <span className="meta-label">FOCUS</span>
                  <p className="meta-val">AI &amp; FullStack Engineering</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Bio Text */}
          <div className="about-right-col">
            <h2 className="about-headline">
              Building practical software with{" "}
              <span className="text-gradient">AI &amp; web technologies.</span>
            </h2>

            <div className="about-prose">
              <p>
                I am a Computer Science student pursuing B.Tech in Software Product
                Engineering through the Kalvium program at Vels Institute of Science,
                Technology and Advanced Studies.
              </p>

              <p>
                I enjoy building full-stack applications, AI-powered tools, REST APIs,
                and document-processing systems. My interests include AI/ML, backend
                engineering, Generative AI, and developing practical solutions to
                real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
