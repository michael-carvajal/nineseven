import { Box, styled } from "@mui/material";
import React from "react";
import { Spotify } from "react-spotify-embed";

function Music({ theme }) {
  const Container = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.secondary,
  }));
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh", // Ensures the Box takes the full height of the viewport
          mx: "auto",
        }}
      >
        <Spotify link="https://open.spotify.com/track/6QS2nWbbANR2EGuhYcjEhu?si=2870d3e7192a497b" />
        <Spotify link="https://open.spotify.com/album/0uJOBzHP3SAIMfL8Gf5CSv?si=ScqzO4b5Q0qH-gWAoXcooQ" />
      </Box>
    </Container>
  );
}

export default Music;
