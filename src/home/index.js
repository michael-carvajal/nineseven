import React from 'react'
import { Typography } from '@mui/material'

function Home({theme}) {
  return (
    <Typography sx={{
      color: theme.palette.background.default
  
          }}>Main section</Typography>
  )
}

export default Home