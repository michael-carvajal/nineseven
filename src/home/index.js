import React from 'react'
import { Typography, styled } from '@mui/material'
import { Spotify } from 'react-spotify-embed'
function Home({theme}) {

  const Container = styled('div')(({theme}) => ({
    display:'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center'
  }));
  return (
    <Container>
      <Typography sx={{
        color: theme.palette.background.default
            }}>Main section</Typography>
            <Spotify  link="https://open.spotify.com/track/6QS2nWbbANR2EGuhYcjEhu?si=2870d3e7192a497b" />
            <Spotify link="https://open.spotify.com/album/0uJOBzHP3SAIMfL8Gf5CSv?si=ScqzO4b5Q0qH-gWAoXcooQ" />


    </Container>
  )
}

export default Home