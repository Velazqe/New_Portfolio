import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Projects = () => {
  return (
    <Container maxWidth="md" id="projects">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Projects
        </Typography>
        <Box>
          <Typography variant="h4" component="h3">
            Project 1
          </Typography>
          <Typography variant="body1" component="p">
            Details about project 1.
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h4" component="h3">
            Project 2
          </Typography>
          <Typography variant="body1" component="p">
            Details about project 2.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
