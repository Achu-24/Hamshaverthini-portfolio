import "./index.css";

const projects = [
  {
    number: "01",
    title: "AI-Assistant",
    tech: "FastAPI • Streamlit • FAISS • Sentence Transformers • LLMs",
    description:
      "AI-powered document assistant that enables PDF upload, context-aware Q&A, summarization, and quiz generation using a RAG pipeline.",
    github: "https://github.com/Achu-24/AI-Assistant",
  },
  {
    number: "02",
    title: "DishQuest",
    tech: "React.js • Node.js • Express.js • MongoDB",
    description:
      "Full-stack recipe platform with responsive interfaces, authentication, REST APIs, MongoDB data management, and production deployment.",
    github:
      "https://github.com/kalviumcommunity/S74_HamshaVerthini_Capstone_DishQuest",
  },
];

const skills = [
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

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          HK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Hamshaverthini <span>K</span>
            </h1>

            <h2>Full Stack Developer · AI / Backend</h2>

            <p className="hero-description">
              Full-stack developer building responsive, AI-powered applications
              using React, Node.js, FastAPI, and MongoDB for document
              processing, intelligent workflows, and data-driven user
              experiences.
            </p>

            <div className="hero-buttons">
              <a
                href="https://github.com/Achu-24"
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                GitHub ↗
              </a>

              <a
                href="https://leetcode.com/u/Hamshaverthini/"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                LeetCode ↗
              </a>

              <a
                href="https://www.linkedin.com/in/hamshaverthini/"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                LinkedIn ↗
              </a>

              <a href="#contact" className="button secondary">
                Contact
              </a>

              <a
                href="/Hamshaverthini.docx.pdf"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                Resume ↗
              </a>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div className="line"></div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="section-number">01</p>
            <p className="section-label">ABOUT</p>
          </div>

          <div className="about-content">
            <h2>
              Building practical software with
              <span> AI & web technologies.</span>
            </h2>

            <div className="about-text">
              <p>
                I am a Computer Science student pursuing B.Tech in Software
                Product Engineering through the Kalvium program at Vels
                Institute of Science, Technology and Advanced Studies.
              </p>

              <p>
                I enjoy building full-stack applications, AI-powered tools,
                REST APIs, and document-processing systems. My interests
                include AI/ML, backend engineering, Generative AI, and
                developing practical solutions to real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="section-number">02</p>
            <p className="section-label">TECHNICAL SKILLS</p>
          </div>

          <div className="skills-content">
            <h2>Technologies I work with.</h2>

            <div className="skills-grid">
              {skills.map((skill) => (
                <span className="skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading">
            <p className="section-number">03</p>
            <p className="section-label">PROJECTS</p>
          </div>

          <div className="projects-content">
            <h2>Things I've built.</h2>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-tech">{project.tech}</p>

                  <p className="project-description">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-heading">
            <p className="section-number">04</p>
            <p className="section-label">EXPERIENCE</p>
          </div>

          <div className="experience-content">
            <div className="experience-header">
              <div>
                <p className="date">JUN 2026 — JUL 2026</p>
                <h2>AMDOX Technologies</h2>
                <h3>Backend Lead</h3>
              </div>

              <span className="role-tag">INTERNSHIP</span>
            </div>

            <div className="experience-body">
              <p>
                Led and coordinated a 5-member backend team, overseeing API
                development, database integration, authentication, and backend
                workflows for an AI-powered Cloud ERP project.
              </p>

              <p>
                Developed and tested backend services using Node.js,
                Express.js, TypeScript, MongoDB, and Mongoose while
                collaborating with frontend developers.
              </p>

              <div className="experience-skills">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>TypeScript</span>
                <span>MongoDB</span>
                <span>REST APIs</span>
              </div>

              <a
                href="/certificates/AMDOX-internship-certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Internship Certificate ↗
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <div className="section-heading">
            <p className="section-number">05</p>
            <p className="section-label">EDUCATION</p>
          </div>

          <div className="education-card">
            <p className="date">2024 — 2028</p>

            <h2>B.Tech — Software Product Engineering</h2>

            <p>
              Kalvium UG Program in Computer Science
              <br />
              Vels Institute of Science, Technology and Advanced Studies,
              Chennai
            </p>

            <div className="education-details">
              <strong>CGPA 8.02 / 10.00</strong>
              <span>Currently in 5th Semester</span>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section">
          <div className="section-heading">
            <p className="section-number">06</p>
            <p className="section-label">
              CERTIFICATIONS & ACHIEVEMENTS
            </p>
          </div>

          <div className="achievement-list">
            {/* Deloitte Data Analytics */}
            <div className="achievement">
              <span>01</span>

              <p>Deloitte Data Analytics Certification</p>

              <small>
                2026{" "}
                <a
                  href="/certificates/DataAnalytics-Deloitte.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  View Certificate ↗
                </a>
              </small>
            </div>

            {/* Deloitte Cyber */}
            <div className="achievement">
              <span>02</span>

              <p>Deloitte Cyber Certification</p>

              <small>
                2026{" "}
                <a
                  href="/certificates/Cyber-Deloitte.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  View Certificate ↗
                </a>
              </small>
            </div>

            {/* UI/UX */}
            <div className="achievement">
              <span>03</span>

              <p>30 Days MasterClass in UI/UX Design</p>

              <small>
                NoviTech R&amp;D Private Limited · 2025{" "}
                <a
                  href="/certificates/HAMSHAVERTHINI.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  View Certificate ↗
                </a>
              </small>
            </div>

            {/* AgeOfAGI */}
            <div className="achievement">
              <span>04</span>

              <p>AgeOfAGI Hackathon — Campus2Career</p>

              <small>
                2026{" "}
                <a
                  href="/certificates/Hamshaverthini-Age-of-Agi-Hackathon.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  View Certificate ↗
                </a>
              </small>
            </div>

            {/* Squad Fusion */}
            <div className="achievement">
              <span>05</span>

              <p>Squad Fusion Hackathon</p>

              <small>2024</small>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <p className="section-label">07 — CONTACT</p>

          <h2>Let's build something together.</h2>

          <p className="contact-text">
            I'm open to internships, software engineering opportunities,
            collaborations, and interesting projects.
          </p>

          <div className="contact-details">
            <a
              href="mailto:hamshaverthinik@gmail.com"
              className="email-link"
            >
              hamshaverthinik@gmail.com ↗
            </a>

            <a
              href="tel:+918610272436"
              className="phone-link"
            >
              +91 8610272436 ↗
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Achu-24"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://leetcode.com/u/Hamshaverthini/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode ↗
            </a>

            <a
              href="https://www.linkedin.com/in/hamshaverthini/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="/Hamshaverthini.docx.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Hamshaverthini K</p>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;