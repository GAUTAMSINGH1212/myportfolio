import React from "react";
import "./App.css";
import Imagepro from "./image/py2.jpg";

const Section = ({ title, children, buttonText = "Explore" }) => (
  <section className="section">
    {title && <h2 className="section-title">{title}</h2>}
    <div className="section-content">{children}</div>
    <div className="section-button-wrapper">
      <button className="section-button">{buttonText}</button>
    </div>
  </section>
);

const Card = ({ children }) => <div className="card">{children}</div>;

export default function App() {
  return (
    <div className="portfolio-container">
      <Section>
        <div className="id-card">
          <img src={Imagepro} alt="Gautam" className="profile-image" />
          <div className="id-content">
            <h1 className="greeting">
              Hi, I'm <span className="highlight-name">Gautam Kumar</span>
            </h1>
            <p className="subtitle">Creative Web Designer & Developer</p>
            <p className="id-bio">
              Bringing design to life with modern technologies and passion.
            </p>
            <div className="id-info">
              <p><strong>📞 Mobile:</strong> +91 9389768289</p>
              <p><strong>📧 Email:</strong> <a href="mailto:gk247126@gmail.com">gk247126@gmail.com</a></p>
              <p><strong>🔗 GitHub:</strong> <a href="http://github.com/GAUTAMSINGH1212" target="_blank">GAUTAMSINGH1212</a></p>
              <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/gautam-kumar-9830aa261/" target="_blank">Gautam Kumar</a></p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="About Me" buttonText="Know More">
        <p>
          I’m Gautam Kumar, a BCA graduate from Ch. Charan Singh University (2023), with a diploma in Web Development and hands-on project experience.
        </p>
        <p>
          I currently work at <strong>Ajiva Infotech Pvt Ltd</strong> as a Web Designer, building sleek, responsive websites using React, Node.js, and Tailwind CSS.
        </p>
      </Section>

      <Section title="Skills" buttonText="See All Skills">
        <div className="grid">
          {[
            "HTML & CSS",
            "Tailwind CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Responsive Design",
            "WordPress (Basic)",
            "Critical Thinking",
            "Management Skills"
          ].map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
      </Section>
      <Section title="Education" buttonText="View Education">
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
</Section>



      <Section title="Experience" buttonText="View Experience">
  <div className="experience-row">
    <div className="exp-header">
      <h3>Web Designer – Ajiva Infotech Pvt Ltd</h3>
      <p className="italic">June 2024 – Present</p>
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
      <li>Worked on projects using React, Tailwind CSS, and Node.js.</li>
      <li>Built live applications and interfaces for real clients.</li>
    </ul>
  </div>
</Section>


      <Section title="Projects" buttonText="View Projects">
        <ul>
          <li><strong>Ajiva Infotech Website</strong> – Corporate brand site</li>
          <li><strong>HirePros UK</strong> – Recruitment platform</li>
          <li><strong>Deals365Days</strong> – E-commerce deals site</li>
          <li><strong>HJChamp</strong> – Sports tournament tracker</li>
          <li><strong>Bass Champs Results</strong> – Fishing competition result system</li>
        </ul>
      </Section>

      <Section title="Hobbies & Interests" buttonText="See Hobbies">
        <div className="grid">
          {[
            "📖 Reading Books",
            "🌍 Traveling",
            "📸 Photography",
            "💻 Coding"
          ].map((hobby) => (
            <Card key={hobby}>{hobby}</Card>
          ))}
        </div>
      </Section>
      {/* <Section title="Contact Me" buttonText="Send Message">
  <form className="contact-form">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" required />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>

    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>
    </div>

    <button type="submit" className="section-button">Send</button>
  </form>
</Section> */}

      <Section title="Contact Me" buttonText="Get in Touch">
        <p>Let’s bring your ideas to life! Reach out to collaborate or say hello.</p>
        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +91 9389768289</p>
          <p><strong>📧 Email:</strong> gk247126@gmail.com</p>
          <p><strong>📍 Location:</strong> Saharanpur, Uttar Pradesh</p>
          <p><strong>🔗 GitHub:</strong> <a href="http://github.com/GAUTAMSINGH1212/">GAUTAMSINGH1212</a></p>
          <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/gautam-kumar-9830aa261/">Gautam Kumar</a></p>
        </div>
      </Section>
    </div>
  );
}
