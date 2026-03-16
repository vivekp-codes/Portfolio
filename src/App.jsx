import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Background from './components/My Journey/MyJourney';
import Works from './components/Works/Works';
import AcademicProjects from './components/Academic Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'Background':
        return <Background />;
      case 'Works':
        return <Works />;
      case 'Projects':
        return <AcademicProjects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </div>
    </main>
  );
}

export default App;
