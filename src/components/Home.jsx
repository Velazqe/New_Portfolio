import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" id="home">
      <Box my={4}>
      <Typography variant="h2" component="h1" gutterBottom>
          Welcome!
        </Typography>
        <div className= "intro-name">
        <Typography variant="h3" component="h1" gutterBottom>
          I'm 
        </Typography>

        <Typography variant="h3" component="h1" gutterBottom id="my-name">
          Emanuel
        </Typography>
        </div>
        <Typography variant="h5" component="h2" gutterBottom>
        "unum diem ad tempus"
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
