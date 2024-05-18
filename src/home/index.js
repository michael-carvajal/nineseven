import React from 'react';
import { Box, Typography } from '@mui/material';
import { Spotify } from 'react-spotify-embed';

function Home({ theme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs : 'column',  sm: 'row'},
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh', // Ensures the Box takes the full height of the viewport
        mx: 'auto',
      }}
    >
      <Typography
        sx={{
          color: theme.palette.background.default,
        }}
      >
        Main section
      </Typography>
      <Spotify link="https://open.spotify.com/track/6QS2nWbbANR2EGuhYcjEhu?si=2870d3e7192a497b" />
      <Spotify link="https://open.spotify.com/album/0uJOBzHP3SAIMfL8Gf5CSv?si=ScqzO4b5Q0qH-gWAoXcooQ" />
    </Box>
  );
}

export default Home;
