import React from 'react';
import './Projects.css'

const Blog = () => {
  return (
    <article className="blog" data-page="Projects">
      <header>
        <h2 className="h2 article-title">Academic Projects</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src="/Images/Project5.jpg" alt="Voice to Video Generator" loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Main Project</p>
                  <span className="dot"></span>
                  <time dateTime="2025">2024 - 2025</time>
                </div>

                <h3 className="h3 blog-item-title">VOICE TO VIDEO GENERATOR</h3>

                <p className="blog-text">
                  This project aims to develop a system that converts voice input into realistic videos using AI. It uses Diffusion Models to generate high quality visuals based on spoken content, with a Django backend and a Flutter based interface for a smooth and responsive user experience.
                </p>

                <h4 className=" tech-title">TECHNOLOGY STACK</h4>
                <div className="tech-stack">
                  <span className="tech">Python</span>
                  <span className="tech">Django</span>
                  <span className="tech">Flutter</span>
                  <span className="tech">Diffusion Models</span>
                  <span className="tech">AI</span>


                </div>

              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src="/Images/Project6.jpg" alt="Voice to Video Generator" loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Mini Project</p>
                  <span className="dot"></span>
                  <time dateTime="2025">2023 - 2024</time>
                </div>

                <h3 className="h3 blog-item-title">TALK2SIGN</h3>

                <p className="blog-text">
                  This project focuses on converting spoken language into corresponding signs of Indian Sign Language (ISL).
                  It uses voice recognition and integrates Google APIs with a Python based interface to generate accurate sign
                  outputs. The aim is to support better communication accessibility for the hearing impaired community.
                </p>

                <h4 className=" tech-title">TECHNOLOGY STACK</h4>
                <div className="tech-stack">
                  <span className="tech">Python</span>
                  
                  <span className="tech">OpenCV</span>
                  <span className="tech">Sign Language Processing</span>
                  <span className="tech">Tkinter</span>
                  <span className="tech">NLP</span>
                  <span className="tech">APIs</span>
                  
                  
                  
                  
                  


                </div>

              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Blog;
