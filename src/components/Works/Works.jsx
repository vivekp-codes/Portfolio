import React, { useState } from "react";
import { Eye, X } from "lucide-react";
import "./Works.css";

const projects = [
  {
    title: "Book My Ticket",
    image: "/Images/p1.png",
    description:
      "A full stack web application that helps users discover and book tickets for live events such as concerts, workshops, races, and stadium shows. Users can browse events, view details, and reserve tickets through an easy to use interface with both seat based and general bookings. Built with React, Node.js, Express, and MongoDB, it includes JWT authentication, an admin dashboard for event management, image uploads, and secure Stripe payment integration.",
    tech: "React, Node.js, Express.js, MongoDB, Stripe, Tailwind",
    github: "https://github.com/vivekp-codes/Project-Book-My-Ticket",
    demo: "https://project-book-my-ticket.vercel.app/",
  },
  {
    title: "Readify",
    image: "/Images/p2.png",
    description:
      "A full stack MERN web application built as a digital library and book exchange platform for students and readers. Users can upload books, browse shared books, and request to borrow them through a simple interface. Built with MongoDB, Express, React, and Node.js, it includes JWT authentication, book management, and a borrowing request system for a smooth user experience.",
    tech: "React, Node.js, Express.js, MongoDB",
    github: "https://github.com/vivekp-codes/Project-Redify",
    demo: "https://project-redify.vercel.app/",
  },
  {
    title: "LuxCar Deals",
    image: "/Images/p3.png",
    description:
      "A full stack React and Firebase platform inspired by OLX, designed for buying and selling pre owned luxury cars. The application features secure user authentication, image based listings, real time database updates, and a modern,responsive UI for seamless browsing on any device. Built with a focus on performance, usability, and an engaging user experience, it provides a streamlined process for connecting trusted sellers with serious buyers.",
    tech: "React, Firebase",
    github: "https://github.com/vivekp-codes/luxury-car-marketplace",
    demo: "https://olx-clone-2f9da.web.app",
  },
  {
    title: "Netflix Clone",
    image: "/Images/p5.png",
    description:
      "A React based web application that replicates the core features and sleek interface of Netflix, integrated with the TMDB API to fetch real time movie and TV show data. The platform includes dynamic content rows and a featured banner.Users can explore detailed movie information, watch trailers via embedded YouTube integration, and enjoy a smooth, cinematic UI experience similar to the original Netflix.",
    tech: "React, TMDB API",
    github: "https://github.com/vivekp-codes/netflix-clone-react",
    demo: "https://flixverse-net-flix.netlify.app/",
  },
  {
    title: "To Do App",
    image: "/Images/p4.png",
    description:
      "A modern task management web application built with React to help users organize daily activities efficiently. Users can add, edit, complete, and delete tasks while managing details like headings, descriptions, and due dates. With real time updates and a responsive design, it provides a simple and smooth experience for managing daily tasks.",
    tech: "React",
    github: "https://github.com/vivekp-codes/Todo-App",
    demo: "https://todo-app-codes.vercel.app/",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Works</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projects.map((project, index) => (
            <li key={index} className="project-item">
              <figure className="project-img">

                <div
                  className="project-item-icon-box"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={20} />
                </div>

                <img src={project.image} alt={project.title} />
              </figure>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.tech}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            <div className="modal-buttons">
  <a
    href={selectedProject.github}
    target="_blank"
    rel="noreferrer"
    className="btn"
  >
    Source Code
  </a>

  {/* Hide Live Demo for first two projects */}
  {selectedProject.title !== "Book My Ticket" &&
    selectedProject.title !== "Readify" && (
      <a
        href={selectedProject.demo}
        target="_blank"
        rel="noreferrer"
        className="btn demo"
      >
        Live Demo
      </a>
    )}
</div>

          </div>
        </div>
      )}
    </article>
  );
};

export default Portfolio;