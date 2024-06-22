import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

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
        <Typography variant='body1' component='p' gutterBottom>
        <Link href="https://github.com/Velazqe" target="_blank" rel="noopener noreferrer" underline="none" color="primary">
              Emanuel Velazquez Github
            </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
