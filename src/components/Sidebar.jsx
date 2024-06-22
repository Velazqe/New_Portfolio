import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, IconButton } from '@mui/material';
import { Home, Info, Work, Contacts, Menu } from '@mui/icons-material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    background: '#1E1E1E',
    color: 'white',
  },
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: '20px auto',
  width: theme.spacing(12),
  height: theme.spacing(12),
}));

const NavLinkStyled = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  '&.active': {
    backgroundColor: '#555',
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <AvatarStyled
        src="path_to_your_image"
        alt="Profile Picture"
      />
      <Typography variant="h6" align="center">
        E. Velazquez
      </Typography>
      <List>
        <NavLinkStyled to="/" exact>
          <ListItem button>
            <ListItemIcon><Home sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLinkStyled>
        <NavLinkStyled to="/about">
          <ListItem button>
            <ListItemIcon><Info sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </NavLinkStyled>
        <NavLinkStyled to="/projects">
          <ListItem button>
            <ListItemIcon><Work sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </NavLinkStyled>
        <NavLinkStyled to="/contact">
          <ListItem button>
            <ListItemIcon><Contacts sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </NavLinkStyled>
      </List>
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1 }}
          >
            <Menu />
          </IconButton>
          <DrawerStyled
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </DrawerStyled>
        </>
      ) : (
        <DrawerStyled
          variant="permanent"
          open
        >
          {drawer}
        </DrawerStyled>
      )}
    </>
  );
};

export default Sidebar;
