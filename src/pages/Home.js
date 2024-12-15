import React from 'react';
import meImage from '../assets/mayarr.PNG';

const Profile = () => (
  <section className="creative">
    <div className="left">
      <h3>Web Developer</h3>
      <h4>Full Stack Developer | Trainee at Orange Academy</h4>
      <p>
     
      </p>
    </div>
    <div className="right">
      <img src={meImage} alt="Profile" className="profile" />
    </div>
  </section>
);

export default Profile;
