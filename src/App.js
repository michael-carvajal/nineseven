import * as React from 'react';
import NavBar from './nav';
import { Typography, styled, useTheme } from '@mui/material';

export default function App() {
  const theme = useTheme();
  const MainContainer = styled('div')(({theme}) =>( {
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Column layout
    minHeight: '100vh', // Ensure the container fills the viewport height
    backgroundColor: theme.palette.primary.main
  }));

  const MainContent = styled('div')(({theme}) => ({
    flex: '1', // Make the content area flexible to fill available space
    padding: '20px', // Add padding as needed
  }));

  return (
    <MainContainer>
      <NavBar />
      <MainContent>
        <Typography sx={{
    color: theme.palette.background.default

        }}>Main section</Typography>
      </MainContent>
    </MainContainer>
  );
}
