import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Menu } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Typography } from '@mui/material';


function NavBar({Link}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const handleDrawerClose = () => {
    setOpen(false);
  };
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const NavContainer = styled('div')(({theme}) => ({
     
      backgroundColor: theme.palette.secondary.main,
      // backgroundColor: 'grey',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '65px',
      padding: '0px 20px'
    }));


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
      <List>
        {['Home', 'About', 'Contact'].map((text, index) => {
          
          const lowerCase =index === 0 ? "" : text.split().map((letter, idx) => idx === 0 ? letter.toLocaleLowerCase() : letter ).join();
          console.log(lowerCase);
          return (
          <ListItem key={text} disablePadding>
                <Link to={`/${lowerCase}`}>
            <ListItemButton>
              <ListItemIcon>
                  {text === "Home" ? <HomeIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
                  </Link>
          </ListItem>
        )})}
      </List>

    </Box>
  );

  return (
    <NavContainer > 
      <Typography sx={{paddingRight: '24px'}}>NinesevenPTA</Typography>
      <Menu fontSize='large' sx={{display: {md: 'none'}}}onClick={toggleDrawer(true)}>Open drawer</Menu>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>
    </NavContainer>
  );
}

export default NavBar