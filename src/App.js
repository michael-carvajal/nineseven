import * as React from 'react';
import NavBar from './nav';
import { styled, useTheme, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home'
import About from './about'
import Contact from './contact'
import HomeBG from './assets/home_background.jpg'
export default function App() {
  const theme = useTheme();
  const MainContainer = styled('div')(({theme}) =>( {
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Column layout
    minHeight: '100vh', // Ensure the container fills the viewport height
    backgroundColor: 'none',

    // transform: `rotate(${180})'`
  }));

  

  return (
    <MainContainer>
      <Router>
        <Box sx={{    backgroundImage: `url(${HomeBG})`, // Correct syntax for setting background image
    backgroundSize: 'cover', // Ensure the background image covers the whole container
    backgroundPosition: 'center', // Center the background image
  }}>
        
        <NavBar Link={Link} />
        
          <Routes>
          <Route path="/" element={<Home theme={theme}/>} />
            <Route path="/about" element={<About theme={theme}/>} />
            <Route path="/contact" element={<Contact theme={theme}/>} />
          </Routes>
      </Box>
      </Router>
    </MainContainer>
  );
}
