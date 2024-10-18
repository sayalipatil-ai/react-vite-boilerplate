
import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header/Header'; 
import Sidebar from '../components/Sidebar/Sidebar'; 
import './layout.css'; 


type Props = {
  children?: React.ReactNode; 
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box className="container">
      <Box className="header" sx={{ height: '5vh' }}>
        <Header />
      </Box>
      <Box className="main">
        <Box className="content" sx={{ height: '91vh' }}>
          <Box className="sidebar">
            <Sidebar />
          </Box>
          <Box className="childrenContainer">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
