import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" id="home">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Emanuel Velazquez
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
        "unum diem ad tempus"
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
