import React from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-tag-header">
          <span className="section-num font-mono">05</span>
          <span className="section-tag-divider">—</span>
          <span className="section-tag-title font-mono">EDUCATION</span>
        </div>

        {/* Education Card */}
        <div className="education-editorial-card">
          <div className="edu-top-meta">
            <div className="edu-date-badge font-mono">
              <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-cyan-400" />
              <span>2024 — 2028</span>
            </div>
            <div className="edu-status-badge font-mono">
              <span>Currently in 5th Semester</span>
            </div>
          </div>

          <div className="edu-main-content">
            <div className="edu-icon-col">
              <div className="edu-icon-box">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
            </div>

            <div className="edu-text-col">
              <h3 className="edu-degree-title">
                B.Tech — Software Product Engineering
              </h3>

              <div className="edu-institution-info">
                <p className="edu-program font-medium text-slate-200">
                  Kalvium UG Program in Computer Science
                </p>
                <p className="edu-university text-slate-400">
                  Vels Institute of Science, Technology and Advanced Studies, Chennai
                </p>
              </div>

              <div className="edu-stats-row font-mono">
                <div className="stat-pill">
                  <Award className="w-4 h-4 text-cyan-400 mr-1.5" />
                  <strong>CGPA 8.02 / 10.00</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
