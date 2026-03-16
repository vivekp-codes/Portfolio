import React, { useState } from 'react';
import './Sidebar.css';
import { Mail, Phone, Calendar, MapPin, ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/Images/image.jpg" alt="Vivek" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Vivek">VIVEK P</h1>
          <p className="title">MERN STACK DEVELOPER</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar} data-sidebar-btn>
          <span>Show Contacts</span>
          <ChevronDown size={20} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:vivek@example.com" className="contact-link">vivekp442004@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+91 8606300315</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Calendar size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1999-06-21">Apr 04, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Malappuram,Kerala</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/iamvivek-p/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/vivekp-codes"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/lamvivekkkk?igsh=OHI3OHdnc2VjYWpo"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
