import React from 'react';
import { GraduationCap, Brain } from 'lucide-react';
import './MyJourney.css'

const Resume = () => {
  return (
    <article className="resume" data-page="Background">
      <header>
        <h2 className="h2 article-title">Background</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <GraduationCap size={20} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">B.Tech in Computer Science and Engineering</h4>
            <span>2021 — 2025</span>
            <p className="timeline-text">
              College: Royal College of Engineering & Technology, Thrissur.<br />
              University: APJ Abdul Kalam Technological University.<br />
              CGPA: 7.9
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Higher Secondary Education – Computer Science</h4>
            <span>2019 — 2021</span>
            <p className="timeline-text">
              School: PKMM Higher Secondary School, Edarikode.<br />
              Board: Kerala State Board.<br />
              Percentage: 90%.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SSLC (10th Standard)</h4>
            <span>2018 — 2019</span>
            <p className="timeline-text">
              School: PKMM Higher Secondary School, Edarikode.<br />
              Board: Kerala State Board.<br />
              Percentage: 96%.
            </p>
          </li>

        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Brain size={20} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">MERN Stack Developer – Techmindz , Kochi</h4>
            <span>2025 — 2026</span>
            <p className="timeline-text">
              Completed MERN Stack development training and built full stack web applications using
              MongoDB, Express.js, React, and Node.js. Developed two projects with responsive UI
              using Tailwind CSS. Experienced in Git and GitHub for version control and collaborative development.
            </p>
          </li>
        </ol>
      </section>







    </article>
  );
};

export default Resume;
