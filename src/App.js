import * as React from "react";
import NavBar from "./nav";
import { styled, useTheme, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Music from "./music";
import HomeBG from "./assets/home_background.jpg";
export default function App() {
  const theme = useTheme();
  const MainContainer = styled("div")(({ theme }) => ({
    display: "flex", // Use flexbox
    flexDirection: "column", // Column layout
    backgroundColor: "none",

    // transform: `rotate(${180})'`
  }));

  return (
    <MainContainer>
      <Box
        sx={{
          backgroundImage: `url(${HomeBG})`, // Correct syntax for setting background image
          backgroundSize: "cover", // Ensure the background image covers the whole container
          backgroundPosition: "center", // Center the background image
          position: "relative",
        }}
      >
        <NavBar Link={Link} />

        <Home theme={theme} />
        <Music theme={theme} />
      </Box>
    </MainContainer>
  );
}
