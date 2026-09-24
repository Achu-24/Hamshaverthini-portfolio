import React from "react";
import { Briefcase, Calendar, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Experience() {
  const expSkills = ["Node.js", "Express.js", "TypeScript", "MongoDB", "REST APIs"];

  return (
    <section id="experience" className="section-wrapper">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-tag-header">
          <span className="section-num font-mono">04</span>
          <span className="section-tag-divider">—</span>
          <span className="section-tag-title font-mono">EXPERIENCE</span>
        </div>

        {/* Experience Case-Study Card */}
        <div className="experience-case-card">
          {/* Header Row */}
          <div className="exp-card-header">
            <div className="exp-title-meta">
              <div className="exp-date-tag font-mono">
                <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-cyan-400" />
                <span>JUN 2026 — JUL 2026</span>
              </div>
              <h3 className="exp-company-name">AMDOX Technologies</h3>
              <h4 className="exp-role-title">Backend Lead</h4>
            </div>

            <div className="exp-badge font-mono">
              <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5 text-cyan-400" />
              <span>INTERNSHIP</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="exp-card-body">
            <div className="exp-points">
              <div className="exp-point-item">
                <span className="point-bullet" />
                <p>
                  Led and coordinated a 5-member backend team, overseeing API
                  development, database integration, authentication, and backend
                  workflows for an AI-powered Cloud ERP project.
                </p>
              </div>

              <div className="exp-point-item">
                <span className="point-bullet" />
                <p>
                  Developed and tested backend services using Node.js, Express.js,
                  TypeScript, MongoDB, and Mongoose while collaborating with frontend
                  developers.
                </p>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="exp-tech-pills">
              <span className="pills-label font-mono">Technologies Used:</span>
              {expSkills.map((tech) => (
                <span key={tech} className="exp-tech-pill font-mono">
                  {tech}
                </span>
              ))}
            </div>

            {/* Certificate Link Button */}
            <div className="exp-cert-action">
              <a
                href="/certificates/AMDOX-internship-certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="button secondary-btn exp-cert-btn"
              >
                <span>View Internship Certificate</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 inline" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
