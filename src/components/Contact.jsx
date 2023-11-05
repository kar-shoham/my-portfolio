import React, { useRef, useState } from 'react'
import {Stack, Typography } from '@mui/material'
import emailjs from '@emailjs/browser'

const Contact = () => {
  let [inputData, updateInputData] = useState({ name: '', email: '', message: '' })
  const form = useRef();
  let [sendingMail, updateSendingMail] = useState(false)
  let onFieldUpdate = e => updateInputData({ ...inputData, [e.target.name]: e.target.value })
  let submitHandler = async (e) => {
    e.preventDefault()
    updateSendingMail(true)
    await emailjs.sendForm('service_yq1ksba', 'template_57bawel', form.current, 'j79Alwf5eZ2YvNq9t')
    updateSendingMail(false)
    updateInputData({ name: '', email: '', message: '' })
  }
  return (
    <Stack width={'25vw'}>
      <Typography id={'contactme'} sx={{ fontFamily: '"Inter", sans-serif;', fontWeight: '800', fontSize: '3rem' }}>Contact Me.</Typography>
      <form ref={form} onSubmit={(e) => submitHandler(e)}>
        <Stack bgcolor={'white'} borderRadius={'8px'} gap={3} p={3}>
          <Stack className='input-field' gap={1}>
            <label className='input-label' htmlFor="name">Name:</label>
            <input value={inputData.name} onChange={(e) => onFieldUpdate(e)} autoComplete="off" className='input' type="text" name="name" id="name" placeholder="What's your good name?" />
          </Stack>
          <Stack className='input-field' gap={1}>
            <label className='input-label' htmlFor="email">Email:</label>
            <input value={inputData.email} onChange={(e) => onFieldUpdate(e)} autoComplete="off" className='input' type="email" name="email" id="email" placeholder="What's your web address?" />
          </Stack>
          <Stack className='input-field' gap={1}>
            <label className='input-label' htmlFor="email">Message:</label>
            <textarea value={inputData.message} onChange={(e) => onFieldUpdate(e)} className='textarea-input' name="message" id="message" placeholder="What's your want to say?" rows="7" />
          </Stack>
          <Stack>
            <button className="btn" disabled={(!(inputData.name && inputData.email && inputData.message) || sendingMail)}>Submit</button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  )
}

export default Contact