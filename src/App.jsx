import './App.css'

function App() {
  return (
    <div className="app">

      {/* =========================
          NAVIGATION
          ========================= */}
      <nav className="navbar">

        <div className="logo">
          Seddy<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* =========================
          HERO
          ========================= */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            COMPUTER SCIENCE STUDENT • DEVELOPER
          </p>

          <h1>
            Hi, I'm <span>Seddy</span>.
          </h1>

          <h2>
            I build websites, web apps and software.
          </h2>

          <p className="hero-description">
            I'm a second-year Computer Science student at the
            University of Mines and Technology, passionate about
            learning technology and turning ideas into practical
            software solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="btn secondary"
            >
              Reach Out To Me
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
          ========================= */}
      <section id="about" className="section">

        <div className="container">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2 className="section-title">
            A little about me
          </h2>

          <div className="about-grid">

            <div className="about-text">

              <p>
                I'm a second-year Computer Science student with
                an interest in software development, web
                development and technology.
              </p>

              <p>
                I enjoy creating practical applications and
                websites that solve real problems. I'm constantly
                learning and improving my programming skills by
                working on different projects.
              </p>

              <p>
                My experience so far includes working with
                JavaScript, HTML, CSS, Python, Java, React and
                WordPress.
              </p>

            </div>


            <div className="info-card">

              <div className="info-item">
                <span>Education</span>
                <strong>University of Mines and Technology</strong>
              </div>

              <div className="info-item">
                <span>Field</span>
                <strong>Computer Science</strong>
              </div>

              <div className="info-item">
                <span>Level</span>
                <strong>Second Year</strong>
              </div>

              <div className="info-item">
                <span>Focus</span>
                <strong>Software & Web Development</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SKILLS
          ========================= */}
      <section id="skills" className="section">

        <div className="container">

          <p className="section-label">
            SKILLS
          </p>

          <h2 className="section-title">
            Technologies I work with
          </h2>

          <p className="section-description">
            A selection of technologies and tools I use while
            learning and building software.
          </p>


          <div className="skills">

            <div className="skill">
              HTML
            </div>

            <div className="skill">
              CSS
            </div>

            <div className="skill">
              JavaScript
            </div>

            <div className="skill">
              Python
            </div>

            <div className="skill">
              Java
            </div>

            <div className="skill">
              React
            </div>

            <div className="skill">
              Git
            </div>

            <div className="skill">
              GitHub
            </div>

            <div className="skill">
              WordPress
            </div>

            <div className="skill">
              Responsive Design
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
          ========================= */}
      <section id="projects" className="section">

        <div className="container">

          <p className="section-label">
            PROJECTS
          </p>

          <h2 className="section-title">
            Things I've built
          </h2>

          <p className="section-description">
            Some of the projects I've worked on while developing
            my programming and software development skills.
          </p>


          <div className="projects">


            {/* Project 1 */}
            <div className="project-card">

              <p className="project-number">
                01
              </p>

              <h3>
                Course Registration System
              </h3>

              <p>
                A software application designed to manage
                student course registration and academic
                records, including student information and
                GPA calculations.
              </p>

              <div className="project-tags">
                <span>Java</span>
                <span>OOP</span>
                <span>File Handling</span>
              </div>

              <a
                href="#"
                className="project-link"
              >
                View Project →
              </a>

            </div>


            {/* Project 2 */}
            <div className="project-card">

              <p className="project-number">
                02
              </p>

              <h3>
                Bakery Website
              </h3>

              <p>
                A responsive website concept created for a
                bakery business, focusing on clean design,
                product presentation and usability.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <a
                href="#"
                className="project-link"
              >
                View Project →
              </a>

            </div>


            {/* Project 3 */}
            <div className="project-card">

              <p className="project-number">
                03
              </p>

              <h3>
                University Management System
              </h3>

              <p>
                A Java-based system designed to manage students,
                lecturers, courses, registration and academic
                records.
              </p>

              <div className="project-tags">
                <span>Java</span>
                <span>ArrayList</span>
                <span>HashMap</span>
              </div>

              <a
                href="#"
                className="project-link"
              >
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
          ========================= */}
      <section id="contact" className="section contact">

        <div className="container">

          <p className="section-label">
            CONTACT
          </p>

          <h2 className="section-title">
            Let's connect.
          </h2>

          <p className="section-description">
            Whether it's a project, collaboration or just a
            conversation about technology, feel free to reach out.
          </p>


          <div className="contact-links">

            <a
              href="#"
              className="contact-link"
            >
              GitHub
            </a>

            <a
              href="#"
              className="contact-link"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="contact-link"
            >
              Email
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
          ========================= */}
      <footer className="footer">

        <p>
          © 2026 Seddy. Built with React.
        </p>

      </footer>

    </div>
  )
}

export default App