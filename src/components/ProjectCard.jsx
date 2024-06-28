import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300}}>
      <CardActionArea>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      </CardActionArea>
        <Button size="small" href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </Button>
    </Card>
  );
};

export default ProjectCard;
