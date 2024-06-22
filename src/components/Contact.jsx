import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" id="contact">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Email: evelaz4.93@gmail.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
