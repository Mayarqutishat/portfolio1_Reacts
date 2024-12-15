import React from 'react';
import Frontend1Image from '../assets/Frontend1.gif';
import Backend1Image from '../assets/Backend1.gif';

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills-images">
      <div className="left">
        <h3>Frontend</h3>
        <img src={Frontend1Image} alt="Frontend Skills" />
        <div className="skills-bar">
          <div className="bar"><span style={{width: '90%'}}>HTML</span></div>
          <div className="bar"><span style={{width: '80%'}}>CSS</span></div>
          <div className="bar"><span style={{width: '80%'}}>BOOTSTRAP</span></div>
          <div className="bar"><span style={{width: '80%'}}>JAVASCRIPT</span></div>
          <div className="bar"><span style={{width: '80%'}}>REACT</span></div>
        </div>
      </div>
      <div className="right">
        <h3>Backend</h3>
        <img src={Backend1Image} alt="Backend Skills" />
        <div className="skills-bar">
        <div className="bar"><span style={{width: '80%'}}>DATABASE</span></div>
          <div className="bar"><span style={{width: '80%'}}>Laravel</span></div>
          <div className="bar"><span style={{width: '80%'}}>APIs</span></div>
         
        
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
