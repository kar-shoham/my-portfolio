import React from 'react';
import ProjectCard from './ProjectCard'
import {Box, Stack} from '@mui/material'


const Projects = () => {
  const projects = [
    {
      title: "Wawatmos",
      url: "https://r3f-wawatmos-final.vercel.app/",
      image: "../../public/projects/wawatmos.jpg",
      description: "Recreating the Atmos Awwwards website with React Three Fiber",
    },
    {
      title: "Portfolio Baking",
      url: "https://www.youtube.com/watch?v=YkHqpqJgLKw",
      image: "../../public/projects/baking.jpg",
      description: "Learn how to bake a 3D model with Blender and use it in r3f",
    },
    {
      title: "3D Avatar",
      url: "https://www.youtube.com/watch?v=pGMKIyALcK0",
      image: "../../public/projects/avatar.jpg",
      description: "Learn how to use ReadyPlayerMe to create a 3D avatar",
    },
    {
      title: "Kanagame",
      url: "https://www.youtube.com/watch?v=zwNF1-lsia8",
      image: "../../public/projects/kanagame.jpg",
      description: "Use React Three Fiber to create a 3D game",
    },
    {
      title: "Loader",
      url: "https://www.youtube.com/watch?v=L12wIvuZTOY",
      image: "../../public/projects/loader.jpg",
      description: "Create a loading screen for your r3f projects",
    },
  ];
  return (
    <Stack direction={'row'} gap={2} sx={{justifyContent: 'center'}}>
      {projects.map(ele => (
        <ProjectCard/>
      ))}
    </Stack>
  )
}


export default Projects