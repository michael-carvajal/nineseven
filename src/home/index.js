import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Box, Button, Typography } from "@mui/material";
import headshot1 from "../assets/headshot1.jpg";

function Home({ theme }) {
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
        <Box sx={{ width: 250 }}>
          <img
            src={headshot1}
            style={{ width: "100%" }}
            alt="home page hero card"
          ></img>
        </Box>
        <Box sx={{ alignSelf: { xs: "auto", md: "end" } }}>
          <Typography>New Single 'THIRTEEN' out NOW</Typography>
          <Button>
            <MusicNoteIcon />
            Listen
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
