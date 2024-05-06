import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Carousel from './components/Carousel/Carousel'; // Import the Carousel component
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about'); // Initialize activeSection state to 'about'

  return (
    <div className="App">
      <Header />
      <Navbar setActiveSection={setActiveSection} /> {/* Pass setActiveSection as prop */}
      {/* Render sections based on activeSection */}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'technologies' && <Technologies />}
      {activeSection === 'contact' && <Contact />}
      <Carousel activeSection={activeSection} /> {/* Pass activeSection as prop */}
    </div>
  );
}

export default App;
