import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Reusable Project Card Component
const ProjectCard = ({ title, description, githubLink }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub size={30} />
    </a>
  </div>
);

const Projects = () => {
  // List of projects with title, description, and github link
  const projectData = [

    {
      title: "Cooming Soon",
      description: "Cooming Soon!",
      githubLink: "https://github.com/Mayarqutishat"
    },
    {
      title: "Mayar Portfolio",
      description: "This project is a professional portfolio website",
      githubLink: "https://github.com/Mayarqutishat/My_portfolio"
    },
    {
      title: "Hikaya",
      description: "This project is a platform to write stories",
      githubLink: "https://github.com/Mayarqutishat/Hikaya"
    },
    {
      title: "smartspending",
      description: "This project is a web application for Budget trucker",
      githubLink: "https://github.com/Mayarqutishat/smartspending"
    },
    {
      title: "Fitzoon",
      description: "This project is a E-commerce for selling palyer T-shirt",
      githubLink: "https://github.com/Mayarqutishat/Ecommerce_Project_PHP_MYSQL"
    },
  
    {
      title: "API-Project",
      description: "This project is a API",
      githubLink: "https://github.com/Mayarqutishat/API"
    },
    
  
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
