import React from 'react';
import ProjectCard from './ProjectCard'
import { Box, Stack, Typography } from '@mui/material'


const Projects = () => {
  const projects = [
    [{
      title: "Course Hub",
      url: "https://course-hub-x.netlify.app/",
      image: "/projects/coursehub.png",
      source: 'https://github.com/kar-shoham/coursehub-backend',
      description: "A full-stack Course Hub website enabling admin functions for course management and user access to the courses through subscriptions using Razorpay.",
    },
    {
      title: "Super Saga",
      url: "https://kar-shoham.github.io/super-mango-kaboom/",
      image: "/projects/supersaga.png",
      source: 'https://github.com/kar-shoham/super-mango-kaboom',
      description: "A 2D Mario-like game with three levels using Vanilla Javascript and Kaboom.js, featuring coin collection and enemy avoidance gameplay mechanics.",
    },
    {
      title: "Chat Hub",
      url: "https://chathub-x.netlify.app/",
      image: "/projects/chathub.png",
      source: 'https://github.com/kar-shoham/chathub-backend',
      description: "Developed a chat application enabling users to engage in real-time one-on-one and group chats, using Web Sockets for instant messaging features. ",
    }],
    [{
      title: "BlogSpot",
      url: "https://blogspot-10.netlify.app/",
      image: "/projects/blogspot.png",
      source: "https://github.com/kar-shoham/blogspot-api",
      description: "A website where users can write their own blogs after creating their account for free.The users can also view the blogs written by other users.",
    },
    {
      title: "Twitter API",
      url: "https://twitter-api-mipn.onrender.com/",
      image: "/projects/twitter.png",
      source: 'https://github.com/kar-shoham/twitter-api',
      description: "A comprehensive RESTful Twitter API with user account management, authentication, and tweet-related functionalities for the backend.",
    },
    {
      title: "WhatsApp GPT",
      url: "https://blogspot-10.netlify.app/",
      image: "/projects/whatsappbot.png",
      source: 'https://github.com/kar-shoham/whatsapp-gpt',
      description: "A WhatsApp-integrated project utilizing, WhatsApp Web JS, and Google Palm 2 enabling users to access AI assistance within WhatsApp.",
    }]
  ];
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Stack gap={1} sx={{ display: 'relative' }} width='84vw'>
        <Typography sx={{ fontFamily: '"Inter", sans-serif;', fontWeight: '800', fontSize: '3rem' }}>My Projects.</Typography>
        <Stack width={'7vw'}>
          <button className='funky' onClick={() => window.open('https://github.com/kar-shoham', "_blank")}>
            GitHub
          </button>
        </Stack>
        <Stack direction={'row'} gap={2} sx={{ justifyContent: 'center' }}>
          {projects[0].map((ele, idx) => (
            <ProjectCard
              key={idx}
              title={ele.title}
              description={ele.description}
              url={ele.url}
              image={ele.image}
              source={ele.source}
            />
          ))}
        </Stack>
        <Stack direction={'row'} gap={2} sx={{ justifyContent: 'center' }}>
          {projects[1].map((ele, idx) => (
            <ProjectCard
              key={idx}
              title={ele.title}
              description={ele.description}
              url={ele.url}
              image={ele.image}
              source={ele.source}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}


export default Projects