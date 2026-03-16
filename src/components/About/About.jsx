import React from 'react';
import './About.css'
import { Code, Monitor, Server, Database } from "lucide-react";

const About = () => {
  return (
    <article className="about active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a MERN Stack Developer and B.Tech Computer Science graduate from Kerala, India.
          I enjoy building modern, responsive, and user friendly web applications using technologies like
          MongoDB, Express.js, React, and Node.js. I’m passionate about turning ideas into real digital
          products with clean design and efficient functionality.
        </p>
        <p>
          My focus is on developing websites and applications that are not only functional and scalable
          but also visually engaging and easy to use. I enjoy solving complex problems and creating
          smooth user experiences. I continuously learn new technologies and best practices to build
          high quality web solutions and deliver meaningful digital experiences.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">

          <li className="service-item">
            <div className="service-icon-box">
              <Code size={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">
                Build modern and responsive web applications using the MERN stack. I focus on creating fast, scalable, and user friendly websites with clean and efficient code.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Monitor size={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend Development</h4>
              <p className="service-item-text">
                Design and develop interactive user interfaces using React, HTML, CSS, and JavaScript. I ensure websites are visually appealing, responsive, and provide a smooth user experience.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Server size={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend Development</h4>
              <p className="service-item-text">
                Develop secure and scalable backend systems using Node.js and Express.js. I work with APIs, authentication, and database integration to power dynamic web applications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Database size={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Database Management</h4>
              <p className="service-item-text">
                Design and manage databases using MongoDB. I ensure efficient data storage, retrieval, and performance for modern web applications.
              </p>
            </div>
          </li>

        </ul>
      </section>

    </article>
  );
};

export default About;
