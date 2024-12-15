import React from 'react';

const About = () => (
  <section id="about" className="about">
    <h2>About</h2>
    <div className="about-details">
      <div className="education">
        <i className="fas fa-graduation-cap" style={{ fontSize: '40px' }}></i>
        <h3>Education</h3>
        <p><b>Computer Information Systems</b></p>
      </div>
      <div className="languages">
        <i className="fas fa-language" style={{ fontSize: '40px' }}></i>
        <h3>Languages</h3>
        <div className="bar"><span style={{width: '100%'}}>Arabic</span></div>
        <div className="bar"><span style={{width: '90%'}}>English</span></div>
      </div>
      <div className="experience">
        <i className="fas fa-briefcase" style={{ fontSize: '40px' }}></i>
        <h3>Experience</h3>
        <p><b>Now - Full Stack Developer Trainee at Orange Academy - Jordan</b></p>
      </div>
    </div>
  </section>
);

export default About;
