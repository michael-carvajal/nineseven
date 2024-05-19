import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Box, Button, Typography, styled } from "@mui/material";
import headshot1 from "../assets/headshot1.jpg";

function Home({ theme }) {
  const NewSong = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.background.default
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "85vh", // Ensures the Box takes the full height of the viewport
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",

          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Box sx={{ width: 375 }}>
          <img
            src={headshot1}
            style={{ width: "100%", borderRadius: 7 }}
            alt="home page hero card"
          ></img>
        </Box>
        <NewSong sx={{ alignSelf: { xs: "auto", md: "end" } }}>
          <Typography>New Single 'THIRTEEN' out NOW</Typography>
          <Button
            href="https://www.youtube.com/watch?v=6TtH_kTskKc&t=4s"
            target="_blank"
            variant="contained"
          >
            <MusicNoteIcon />
            Listen
          </Button>
        </NewSong>
      </Box>
    </Box>
  );
}

export default Home;
