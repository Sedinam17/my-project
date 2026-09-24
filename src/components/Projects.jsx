export default function Projects() {
    return (
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
    ) }