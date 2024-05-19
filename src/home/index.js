import React from "react";
import { Box, Typography } from "@mui/material";

function Home({ theme }) {
  return (
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

    </Box>
  );
}

export default Home;
