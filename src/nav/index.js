import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';

import { Menu } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';
import DrawerList from './DrawerList';


function NavBar({Link}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  const NavContainer = styled('div')(({theme}) => ({
     
      // backgroundColor: theme.palette.secondary.main,
      // backgroundColor: 'grey',
      display: 'flex',
      position: 'fixed',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '65px',
      padding: '0px 60px'
    }));


  

  return (
    <NavContainer sx={{color: theme.palette.background.default,}} > 
      <Typography sx={{}}>NinesevenPTA</Typography>
      <Menu fontSize='large' sx={{display: {md: 'none'}}}onClick={toggleDrawer(true)}></Menu>
      <Box sx={{display: {xs : 'none', md : 'flex', }, justifyContent:'space-between', width: '400px'}} flexDirection='row'>
      {['Home', 'Music', 'EPK', 'Merch', 'Contact'].map((section, key) => (
        <React.Fragment key={`${key}`}>
          <Button variant='text' color='inherit'>{section}</Button>
        </React.Fragment>
      ))}
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        <DrawerList toggleDrawer={toggleDrawer} setOpen={setOpen} theme={theme} styled={styled} Link={Link}/>
      </Drawer>
    </NavContainer>
  );
}

export default NavBar