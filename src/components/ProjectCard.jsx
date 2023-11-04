import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'

const ProjectCard = ({title, url, image, description, source}) => {
  return (
    <Card sx={{ width: '22vw', borderRadius: '12px', height: '42vh' }}>
      <CardMedia
        sx={{ height: 180, '&:hover': {cursor: 'pointer'} }}
        image={image}
        onClick={() => window.open(url, "_blank")}
      />
      <CardContent>
        <Typography gutterBottom sx={{fontFamily: '"Inter", sans-serif;', fontWeight: '800', fontSize: '2.2rem'}} component="div">
          {title}
        </Typography>
        <Typography sx={{fontFamily: 'Nunito, sans-serif;', fontSize: '1rem'}} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => window.open(url, "_blank")}>Link</Button>
        <Button size="small" onClick={() => window.open(source, "_blank")}>Source Code</Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard