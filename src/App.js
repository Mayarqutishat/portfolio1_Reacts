import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'; // Corrected import for Projects
import Contact from './pages/Contact';
import Highlight from './pages/Highlight';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme'; // Hook for theme switching

import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function from hook

  return (
    <Router>
      <div className={theme}> {/* Apply current theme as class */}
        <Navbar toggleTheme={toggleTheme} /> {/* Pass toggleTheme to Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/highlight" element={<Highlight />} /> {/* Changed path to lowercase for consistency */}
          <Route path="/skills" element={<Skills />} /> {/* Changed path to lowercase for consistency */}
          <Route path="/contact" element={<Contact />} /> {/* Changed path to lowercase for consistency */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
