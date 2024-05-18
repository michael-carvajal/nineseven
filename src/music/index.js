import { Box, styled } from '@mui/material'
import React from 'react'

function Music({theme}) {
    const Container = styled('div')(({theme}) => ({
        height: '400px', backgroundColor: theme.palette.background.secondary
    }))
  return (
    <Container >Music</Container>
  )
}

export default Music