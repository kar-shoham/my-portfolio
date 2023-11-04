import { Drawer, Stack, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({ onSectionChange, menuOpened, setMenuOpened }) => {
  let navigateOptions = ['About', 'Skills', 'Projects', 'Contact']
  return (
    <>
      <Stack sx={{
        position: 'absolute', top: '2rem', right: '2rem',
        bgcolor: '#5348E1', padding: '2px', borderRadius: '3px',
        '&:hover': {
          cursor: 'pointer'
        }
      }}
        onClick={() => setMenuOpened(true)}
      >
        <MenuIcon fontSize='small' sx={{ color: 'white', stroke: "white", strokeWidth: 1 }} />
      </Stack>
      <Drawer anchor='right' open={menuOpened}
        onClose={() => setMenuOpened(false)}
        BackdropProps={{ invisible: true }}
      >
        <Stack height={'100vh'} sx={{ justifyContent: 'center' }} width={'9vw'} p={4}>
          <Stack sx={{
            position: 'absolute', top: '2rem', right: '2rem',
            bgcolor: '#5348E1', padding: '2px', borderRadius: '3px',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
            onClick={() => setMenuOpened(false)}
          >
            <CloseIcon fontSize='small' sx={{ color: 'white', stroke: "white", strokeWidth: 0.5 }} />
          </Stack>
          <Stack  gap={1.5}>
            {navigateOptions.map((ele, idx) => (
              <Typography
                onClick={() => onSectionChange(idx)}
                sx={{ '&:hover': { cursor: 'pointer', color: '#818CF8' }, 
                fontWeight: 600, fontSize: '1.1rem' }}
                key={ele}
              >
                {ele}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </>
  )
}

export default Menu