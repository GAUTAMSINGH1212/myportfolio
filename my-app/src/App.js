import React from "react";
import "./App.css";
import Imagepro from "./image/py2.jpg";
import Header from "./compo/header";

const Card = ({ children }) => <div className="card">{children}</div>;

export default function App() {
  return (
    <>
      <div className="portfolio-container">
        <Header />

        {/* ID Card Section */}
        <section className="section">
          <div className="id-card">
            <div className="profile-image-outer">
              <img src={Imagepro} alt="Gautam" className="profile-image" />
            </div>{" "}
            <div className="id-content">
              <div className="">
                {" "}
                <h1 className="greeting">
                  Hi, I'm <span className="highlight-name">Gautam Kumar</span>
                </h1>
                <p className="subtitle">Creative Web Designer & Developer</p>
                <p className="id-bio">
                  Bringing design to life with modern technologies and passion.
                </p>
              </div>
              <div className="id-info">
                <p>
                  <strong>📞 Mobile:</strong> +91 9389768289
                </p>
                <p>
                  <strong>📧 Email:</strong>{" "}
                  <a href="mailto:gk247126@gmail.com">gk247126@gmail.com</a>
                </p>
                <p>
                  <strong>🔗 GitHub:</strong>{" "}
                  <a href="http://github.com/GAUTAMSINGH1212" target="_blank">
                    GAUTAMSINGH1212
                  </a>
                </p>
                <p>
                  <strong>🔗 LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/gautam-kumar-9830aa261/"
                    target="_blank"
                  >
                    Gautam Kumar
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div> */}
        </section>

        {/* About Section */}
        <section className="section" id="">
          <h2 className="section-title">About Me</h2>
          <p>
            I’m Gautam Kumar, a BCA graduate from Ch. Charan Singh University
            (2023), with a diploma in Web Development and hands-on project
            experience.
          </p>
          <p>
            I currently work at <strong>Ajiva Infotech Pvt Ltd</strong> as a Web
            Designer, building sleek, responsive websites using React, Node.js,
            and Tailwind CSS.
          </p>
          {/* <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div> */}
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="grid">
            <Card>HTML & CSS</Card>
            <Card>Tailwind CSS</Card>
            <Card>JavaScript</Card>
            <Card>React</Card>
            <Card>Next.js</Card>
            <Card>Node.js</Card>
            <Card>Responsive Design</Card>
            <Card>WordPress (Basic)</Card>
            <Card>Critical Thinking</Card>
            <Card>Management Skills</Card>
          </div>
          {/* <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div> */}
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <div className="edu-degree">BCA</div>
            <div className="edu-info">
              <div className="edu-college">Ch. Charan Singh University</div>
              <div className="edu-year">2021 – 2023</div>
            </div>
          </div>
          <div className="education-item">
            <div className="edu-degree">12th</div>
            <div className="edu-info">
              <div className="edu-college">Kishan Sevak Inter College</div>
              <div className="edu-year">2019 – 2020</div>
            </div>
          </div>
          <div className="education-item">
            <div className="edu-degree">10th</div>
            <div className="edu-info">
              <div className="edu-college">Kishan Sevak Inter College</div>
              <div className="edu-year">2017 – 2018</div>
            </div>
          </div>
          {/* <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div> */}
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-row">
            <div className="exp-header">
              <h3>Web Designer – Ajiva Infotech Pvt Ltd</h3>
              <p className="italic">January 2024 – Present</p>
            </div>
            <ul className="exp-details">
              <li>Designed responsive websites focused on user experience.</li>
              <li>Collaborated on UI/UX designs for real-world projects.</li>
            </ul>
          </div>
          <div className="experience-row">
            <div className="exp-header">
              <h3>Web Development Intern</h3>
              <p className="italic">4-month internship</p>
            </div>
            <ul className="exp-details">
              <li>
                Worked on projects using React, Tailwind CSS, and Node.js.
              </li>
              <li>Built live applications and interfaces for real clients.</li>
            </ul>
          </div>
          {/* <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div> */}
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <ul>
            <li>
              <strong>Ajiva Infotech Website</strong> – Corporate brand site
            </li>
            <li>
              <strong>HirePros UK</strong> – Recruitment platform
            </li>
            <li>
              <strong>Deals365Days</strong> – E-commerce deals site
            </li>
            <li>
              <strong>HJChamp</strong> – Sports tournament tracker
            </li>
            <li>
              <strong>Bass Champs Results</strong> – Fishing competition result
              system
            </li>
          </ul>
          {/* <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div> */}
        </section>

        {/* Hobbies Section */}
        <section className="section">
          <h2 className="section-title">Hobbies & Interests</h2>
          <div className="grid">
            <Card>📖 Reading Books</Card>
            <Card>🌍 Traveling</Card>
            <Card>📸 Photography</Card>
            <Card>💻 Coding</Card>
          </div>
          {/* <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div> */}
        </section>

        {/* Contact Section */}
        <section className="section">
          <h2 className="section-title">Contact Me</h2>
          <p>
            Let’s bring your ideas to life! Reach out to collaborate or say
            hello.
          </p>
          <div className="contact-info">
            <p>
              <strong>📞 Phone:</strong> +91 9389768289
            </p>
            <p>
              <strong>📧 Email:</strong> gk247126@gmail.com
            </p>
            <p>
              <strong>📍 Location:</strong> Saharanpur, Uttar Pradesh
            </p>
            <p>
              <strong>🔗 GitHub:</strong>{" "}
              <a href="http://github.com/GAUTAMSINGH1212/">GAUTAMSINGH1212</a>
            </p>
            <p>
              <strong>🔗 LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/gautam-kumar-9830aa261/">
                Gautam Kumar
              </a>
            </p>
          </div>
          <div className="section-button-wrapper">
            <button className="section-button">Touch</button>
          </div>
        </section>
      </div>
    </>
  );
}
