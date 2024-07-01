// src/components/Layout.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Navbar toggleTheme={() => setDarkMode(!darkMode)} />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
