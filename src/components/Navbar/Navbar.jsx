import React from 'react';
import './Navbar.css'

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ['about', 'Background', 'Works', 'Projects', 'contact'];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map((tab) => (
          <li className="navbar-item" key={tab}>
            <button
              className={`navbar-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
