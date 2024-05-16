import * as React from 'react';
import NavBar from './nav';
import { styled, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home'
import About from './about'
import Contact from './contact'

export default function App() {
  const theme = useTheme();
  const MainContainer = styled('div')(({theme}) =>( {
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Column layout
    minHeight: '100vh', // Ensure the container fills the viewport height
    backgroundColor: theme.palette.primary.main
  }));

  

  return (
    <MainContainer>
      <Router>
      <NavBar Link={Link} />
        
  
        <Routes>
        <Route path="/" element={<Home theme={theme}/>} />
          <Route path="/about" element={<About theme={theme}/>} />
          <Route path="/contact" element={<Contact theme={theme}/>} />
        </Routes>
      </Router>
    </MainContainer>
  );
}
