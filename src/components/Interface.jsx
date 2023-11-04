import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import '../styles/Interface.css'
import { motion } from 'framer-motion'
import Projects from './Projects'
import ProjectCard from './ProjectCard'

const Section = ({ children, bg }) => {
  return (
    <Stack width={'100vw'} height={'100vh'}
      sx={{ justifyContent: 'center' }}
      paddingLeft={5} paddingRight={5} 
      component={motion.div}
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6
        }
      }}
      bgcolor={bg}
    >
      {children}
    </Stack>
  )
}

const Interface = ({ setSection }) => {
  return (
    <>
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <Section>
        <Projects/>
      </Section>
      <ContactSection />
    </>
  )
}




const AboutSection = ({ setSection }) => {
  return (
    <Section>
      <Stack alignItems={'flex-end'} width={'40vw'}>
        <Stack display={'flex'}>
          <Typography sx={{ fontWeight: 700, fontSize: '5rem', fontFamily: 'Oswald, sans-serif;' }} className='title'>
            Hi, I'm
          </Typography>
          <div className="myname">
            <Typography sx={{ fontWeight: 700, fontSize: '5rem', fontStyle: 'italic', bgcolor: 'white', fontFamily: 'Oswald, sans-serif;' }}
              className='title' width={'85%'}>
              Shoham Kar
            </Typography>
          </div>
          <Typography variant='p' paddingTop={1}
            sx={{
              color: '#212121', fontFamily: 'Mukta, sans-serif;',
              fontSize: '1rem', lineHeight: '18px'
            }}
            width={'70%'} component={motion.p}
            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.2
              }
            }}>
            I am a full stack developer, currently pursuing BTech in Computer Science.
          </Typography>
          <Stack paddingTop={2} width={'20%'} component={motion.div}
            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 2
              }
            }}>
            <Stack direction={'row'}>
            <button className='funky' onClick={() => setSection(4)}> Contact Me
            </button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Section >
  )
}



function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      {/* <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}

let skills = [
  {
    title: 'Data Structures',
    progress: 90
  },
  {
    title: 'Node JS',
    progress: 85
  },
  {
    title: 'React JS',
    progress: 70
  },
  {
    title: 'DBMS',
    progress: 65
  },
  {
    title: 'C/C++',
    progress: 80
  }
]

let languages = [
  {
    name: 'English',
    progress: 85
  },
  {
    name: 'Hindi',
    progress: 85
  },
  {
    name: 'Bengali',
    progress: 80
  },
  {
    name: 'Spanish',
    progress: 30
  }
]

const SkillsSection = () => {
  return (
    <Section>
      <Stack width={'30vw'} paddingLeft={8} gap={7}>
        <Stack gap={1.2}>
          <Typography sx={{ fontSize: '3rem', fontWeight: '600', fontFamily: 'Titillium Web, sans-serif;' }}>Skills</Typography>
          {skills.map((ele, idx) => (
            <Stack key={idx} component={motion.div}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5 + idx * 0.1
                }
              }}
            >
              <Typography sx={{ fontFamily: 'Titillium Web, sans-serif;', fontSize: '1.5rem', fontWeight: '600' }}>{ele.title}</Typography>
              <Stack sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={ele.progress} />
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack gap={1.2}>
          <Typography sx={{ fontSize: '3rem', fontWeight: '600', fontFamily: 'Titillium Web, sans-serif;' }}>Languages</Typography>
          {languages.map((ele, idx) => (
            <Stack key={ele.name} component={motion.div}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1 + idx * 0.1
                }
              }}>
              <Typography sx={{ fontFamily: 'Titillium Web, sans-serif;', fontSize: '1.5rem', fontWeight: '600' }}>{ele.name}</Typography>
              <Stack sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={ele.progress} />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Section>
  )
}

let ContactSection = () => {
  return (
    <Section>
      <Stack direction={'row'} sx={{alignItems: 'center'}}>
        <Stack width={'20vw'} paddingLeft={8}>
          <Typography id={'contactme'} sx={{ fontFamily: 'Titillium Web, sans-serif;', fontWeight: '600', fontSize: '3rem' }}>Contact Me</Typography>
          <Stack bgcolor={'white'} borderRadius={'8px'} gap={2} p={2}>
            <div className="coolinput">
              <label htmlFor="name" className="text">Name:</label>
              <input type="text" placeholder="John Doe." name="name" id='name' className="input" />
            </div>
            <div className="coolinput">
              <label htmlFor="email" className="text">Email:</label>
              <input type="email" placeholder="example@abc.com" name="email" id='email' className="input" />
            </div>
            <div className="coolinput">
              <label htmlFor="message" className="text">Message:</label>
              {/* <input type="email" placeholder="example@abc.com" name="name" id='name' className="input" /> */}
              <textarea className="input" cols={40} rows={7} id='message' placeholder='Write a message...' />
            </div>
            <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <button className='contact'> Submit </button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Section >
  )
}

export default Interface