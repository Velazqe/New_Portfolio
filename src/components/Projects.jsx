import React from 'react';
import { Typography, Link, CardActionArea, CardActions, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import projectData from './ProjectData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
      <Typography variant="h2" component="h1" gutterBottom>
          Projects
        </Typography>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
