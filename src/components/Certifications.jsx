import React from "react";
import { ArrowUpRight, Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "Deloitte Data Analytics Certification",
    year: "2026",
    issuer: "",
    link: "/certificates/DataAnalytics-Deloitte.pdf",
  },
  {
    number: "02",
    title: "Deloitte Cyber Certification",
    year: "2026",
    issuer: "",
    link: "/certificates/Cyber-Deloitte.pdf",
  },
  {
    number: "03",
    title: "30 Days MasterClass in UI/UX Design",
    year: "2025",
    issuer: "NoviTech R&D Private Limited",
    link: "/certificates/HAMSHAVERTHINI.pdf",
  },
  {
    number: "04",
    title: "AgeOfAGI Hackathon — Campus2Career",
    year: "2026",
    issuer: "",
    link: "/certificates/Hamshaverthini-Age-of-Agi-Hackathon.jpg",
  },
  {
    number: "05",
    title: "Squad Fusion Hackathon",
    year: "2024",
    issuer: "",
    link: null,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-tag-header">
          <span className="section-num font-mono">06</span>
          <span className="section-tag-divider">—</span>
          <span className="section-tag-title font-mono">
            CERTIFICATIONS &amp; ACHIEVEMENTS
          </span>
        </div>
        <h2 className="section-title margin-bottom-lg">Recognitions &amp; Credentials.</h2>

        {/* Premium Table List Rows */}
        <div className="cert-list-container">
          {certifications.map((item) => (
            <div key={item.number} className="cert-row-item">
              <div className="cert-col-num font-mono">{item.number}</div>

              <div className="cert-col-main">
                <h3 className="cert-item-title">{item.title}</h3>
                {item.issuer && (
                  <p className="cert-item-issuer">{item.issuer}</p>
                )}
              </div>

              <div className="cert-col-meta">
                <span className="cert-item-year font-mono">{item.year}</span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link-btn"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
