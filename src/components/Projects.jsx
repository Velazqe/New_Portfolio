import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Projects = () => {
  return (
    <Container maxWidth="md" id="projects">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Projects
        </Typography>
        <Box>
          <Typography variant="h4" component="h3">
            <Link href="https://github.com/Velazqe/Tech-Blog" target="_blank" rel="noopener noreferrer" underline="none" color="primary">
              Tech Blog
            </Link>
          </Typography>
          <Typography variant="body1" component="p">
            Website where you can make blog post about everything tech!
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h4" component="h3">
          <Link href="https://github.com/Velazqe/Illuminears" target="_blank" rel="noopener noreferrer" underline="none" color="primary">
              Illuminears Quest
            </Link>
          </Typography>
          <Typography variant="body1" component="p">
            Inrercative deck builder for the popular DIsney trading card game Lorcana. 
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
