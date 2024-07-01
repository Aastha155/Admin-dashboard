// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ensure correct import path

const Navbar = ({ toggleTheme }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Switch onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
