import React from 'react'
import { Typography } from '@mui/material'
function About({theme}) {
  return (
    <Typography sx={{
      color: theme.palette.background.default
  
          }}>About</Typography>
  )
}

export default About