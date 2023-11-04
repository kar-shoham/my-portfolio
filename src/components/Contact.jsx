import React from 'react'
import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material'


const Contact = () => {
  return (
    <Stack width={'25vw'}>
          <Typography id={'contactme'} sx={{ fontFamily: '"Inter", sans-serif;', fontWeight: '800', fontSize: '3rem' }}>Contact Me.</Typography>
          <Stack bgcolor={'white'} borderRadius={'8px'} gap={3} p={3}>
            <Stack className='input-field' gap={1}>
              <label className='input-label' htmlFor="name">Name:</label>
              <input className='input' type="text" name="name" id="name" placeholder="What's your good name?"/>
            </Stack>
            <Stack className='input-field' gap={1}>
              <label className='input-label' htmlFor="email">Email:</label>
              <input className='input' type="email" name="email" id="email" placeholder="What's your web address?"/>
            </Stack>
            <Stack className='input-field' gap={1}>
              <label className='input-label' htmlFor="email">Message:</label>
              <textarea className='textarea-input' name="message" id="message" placeholder="What's your want to say?" rows="7"/>
            </Stack>
            <button className="btn">Submit</button>
          </Stack>
        </Stack>
  )
}

export default Contact