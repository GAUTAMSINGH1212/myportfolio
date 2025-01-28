import React from "react";
import "./App.css"
const Portfolio = () => {
  return (
    <div className="">
      {/* Welcome Section */}
      <header className=" prf-header-section py-12 px-6 text-center">
        <h1 className=" mb-4">Hi, I'm Gautam Kumar</h1>
        <p className="text-xl">Creative Web Designer & Developer</p>
        <p className="mt-4 text-lg">
          Bringing design to life with modern web technologies, user-focused
          solutions, and a passion for innovation.
        </p>
      </header>

      {/* About Me Section */}
      <section className="py-12 px-6 Passionat-details-section ">
       <div className=" Passionat-details-section-inner">
       {/* <h2 className="prf-details-hedding">
          A Passionate Web Designer from Saharanpur
        </h2> */}
        <div className="portfolio-welcome ">
        <p >
          Welcome to my portfolio! I'm Gautam Kumar.
           I hold a Bachelor's degree in Computer
          Applications (BCA) from Ch. Charan Singh University, completed in
          2023. With a diploma in Web Development and hands-on experience in
          the field, I specialize in crafting responsive, user-friendly, and
          visually engaging websites.
        </p>
        </div>
        <div className="portfolio-Currently-worke">
        <p >
          Currently, I am working at <strong>Ajiva Infotech Pvt Ltd</strong>,
          where I bring ideas to life by designing web experiences that blend
          functionality and aesthetics. My journey also includes a 4-month
          internship, during which I honed my skills in React, Node.js, and
          Tailwind CSS.
        </p>
        </div>
       </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-200 py-12 px-6 portfolio-skills">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <li className="bg-white p-4 rounded-lg shadow">HTML & CSS</li>
          <li className="bg-white p-4 rounded-lg shadow">Tailwind CSS</li>
          <li className="bg-white p-4 rounded-lg shadow">JavaScript</li>
          <li className="bg-white p-4 rounded-lg shadow">React</li>
          <li className="bg-white p-4 rounded-lg shadow">Next.js</li>
          <li className="bg-white p-4 rounded-lg shadow">Node.js</li>
          <li className="bg-white p-4 rounded-lg shadow">Responsive Web Design</li>
          <li className="bg-white p-4 rounded-lg shadow">WordPress (Basic)</li>
          <li className="bg-white p-4 rounded-lg shadow">Critical Thinking</li>
          <li className="bg-white p-4 rounded-lg shadow">Management Skills</li>
        </ul>
      </section>

      {/* Education Section  #ddd4c7
*/}
      <section className="py-12 px-6 Education-setion ">
       <div className=" Education-setion">
        <div className=" Education-setion-headding"> 
       <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
        </div>
       <div className=" Education-setion-details">
       <ul className="max-w-4xl mx-auto space-y-4">
          <li>
            <strong>Bachelor of Computer Application (BCA):</strong> Ch. Charan
            Singh University (2021 - 2023)
          </li>
          <li>
            <strong>12th Grade (PCM Science):</strong> Kishan Sevak Inter
            College (2019 - 2020)
          </li>
          <li>
            <strong>10th Grade (Computer Science):</strong> Kishan Sevak Inter
            College (2017 - 2018)
          </li>
        </ul>
       </div>
       </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Web Designer</h3>
            <p className="italic">Ajiva Infotech Pvt Ltd (June 2024 - Present)</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Designed and developed responsive websites focused on exceptional user experiences.</li>
              <li>Collaborated with teams to create appealing and functional web interfaces.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Web Development Intern</h3>
            <p className="italic">(4-month Internship)</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Enhanced technical expertise by working on modern web applications.</li>
              <li>Focused on React, Node.js, and Tailwind CSS for project development.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <ul className="max-w-4xl mx-auto space-y-4">
          <li><strong>Ajiva Infotech Website:</strong> Crafted a professional and modern website for Ajiva Infotech Pvt Ltd, focusing on corporate branding and usability.</li>
          <li><strong>HirePros UK:</strong> Developed a responsive recruitment platform for connecting employers with potential candidates.</li>
          <li><strong>Deals365Days:</strong> Designed a dynamic e-commerce platform for daily deals and discounts, ensuring a seamless shopping experience.</li>
          <li><strong>HJChamp:</strong> Built a sports management website for tracking live tournaments and results.</li>
          <li><strong>Bass Champs Results:</strong> Created an interactive results platform for a fishing competition with a focus on real-time updates.</li>
        </ul>
      </section>

      {/* Hobbies Section */}
      <section className="bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Hobbies & Interests</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <li className="bg-white p-4 rounded-lg shadow">Reading Books</li>
          <li className="bg-white p-4 rounded-lg shadow">Traveling</li>
          <li className="bg-white p-4 rounded-lg shadow">Photography</li>
          <li className="bg-white p-4 rounded-lg shadow">Coding</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-lg">Let’s bring your ideas to life! Reach out to discuss projects, collaborations, or just to say hi.</p>
        <div className="mt-6 text-center space-y-4">
          <p><strong>Phone:</strong> +91 9389768289</p>
          <p><strong>Email:</strong> [gk247126@gmail.com]</p>
          <p><strong>Location:</strong> Saharanpur, Uttar Pradesh</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
