import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'

const ProjectCard = ({title, url, image, description, source}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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