import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" id="about">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          I'm a Military Veteran who is re-inventing himself and adjusting to the online world. 
          Aspiring Youtuber and Web Developer with a background in IT and Cyber Security. I want to 
          leverage my web development skills in to a job that will allow me to begin creating a 
          family of my own. 
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
