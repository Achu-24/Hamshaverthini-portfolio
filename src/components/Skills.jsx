import React, { useState } from "react";
import { Cpu, Code, Database, Wrench, Layers } from "lucide-react";

const skillCategories = [
  {
    category: "AI, ML & Data",
    icon: Cpu,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Generative AI",
      "LLMs",
      "RAG",
      "FAISS",
      "Sentence Transformers",
    ],
  },
  {
    category: "Languages & Frontend",
    icon: Code,
    skills: [
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Streamlit"
    ],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    category: "Developer Tools & Cloud",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Bruno",
      "Render",
      "Netlify",
    ],
  },
];

// All 32 skills in flat array
const allSkills = [
  "Python",
  "Java",
  "C++",
  "Pandas",
  "NumPy",
  "JavaScript",
  "TypeScript",
  "React.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Streamlit",
  "Node.js",
  "Express.js",
  "FastAPI",
  "REST APIs",
  "JWT",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Supabase",
  "Generative AI",
  "LLMs",
  "RAG",
  "FAISS",
  "Sentence Transformers",
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "Bruno",
  "Render",
  "Netlify",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("categories");

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <div className="section-tag-header">
              <span className="section-num font-mono">02</span>
              <span className="section-tag-divider">—</span>
              <span className="section-tag-title font-mono">TECHNICAL SKILLS</span>
            </div>
            <h2 className="section-title">Technologies I work with.</h2>
          </div>

          {/* View Toggle */}
          <div className="skills-view-toggle font-mono">
            <button
              className={`toggle-btn ${activeTab === "categories" ? "active" : ""}`}
              onClick={() => setActiveTab("categories")}
            >
              Categorized
            </button>
            <button
              className={`toggle-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Skills ({allSkills.length})
            </button>
          </div>
        </div>

        {/* Content View */}
        {activeTab === "categories" ? (
          <div className="skills-category-grid">
            {skillCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="skills-category-card">
                  <div className="cat-card-header">
                    <IconComp className="w-4 h-4 text-cyan-400" />
                    <h3 className="cat-card-title">{cat.category}</h3>
                  </div>

                  <div className="cat-skills-pills">
                    {cat.skills.map((skill) => (
                      <span className="skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="skills-flat-grid">
            {allSkills.map((skill) => (
              <span className="skill-pill flat-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
