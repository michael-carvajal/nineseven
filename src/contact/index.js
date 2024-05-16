import React from 'react'
import { Typography } from '@mui/material'
function Contact({theme}) {
  return (
    <Typography sx={{
      color: theme.palette.background.default
  
          }}>Theme</Typography>
  )
}

export default Contact