// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={NavLink} to="/" exact>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/tables">
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button component={NavLink} to="/charts">
          <ListItemText primary="Charts" />
        </ListItem>
        <ListItem button component={NavLink} to="/calendar">
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={NavLink} to="/kanban">
          <ListItemText primary="Kanban Board" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
