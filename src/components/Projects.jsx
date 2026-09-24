import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI-Assistant",
    techArray: ["FastAPI", "Streamlit", "FAISS", "Sentence Transformers", "LLMs"],
    description:
      "AI-powered document assistant that enables PDF upload, context-aware Q&A, summarization, and quiz generation using a RAG pipeline.",
    github: "https://github.com/Achu-24/AI-Assistant",
    demo: "https://ai-assistantgit-eutekm8p38rqgbdrocnyry.streamlit.app/",
  },
  {
    number: "02",
    title: "DishQuest",
    techArray: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Full-stack recipe platform with responsive interfaces, authentication, REST APIs, MongoDB data management, and production deployment.",
    github:
      "https://github.com/kalviumcommunity/S74_HamshaVerthini_Capstone_DishQuest",
    demo: "https://dishquest-capstone.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-tag-header">
          <span className="section-num font-mono">03</span>
          <span className="section-tag-divider">—</span>
          <span className="section-tag-title font-mono">PROJECTS</span>
        </div>
        <h2 className="section-title margin-bottom-lg">Things I've built.</h2>

        {/* Projects Showcase Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              {/* Top Header Row */}
              <div className="project-top-row">
                <span className="project-number font-mono">
                  {project.number} / 02
                </span>
                <span className="project-featured-tag font-mono">
                  FEATURED PROJECT
                </span>
              </div>

              {/* Title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Tech Stack Pills */}
              <div className="project-tech-pills">
                {project.techArray.map((t) => (
                  <span key={t} className="tech-pill font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="project-description">{project.description}</p>

              {/* Action Links */}
              <div className="project-action-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn primary-project-btn"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
