import React, { useState } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, IconButton } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import RouteIcon from '@mui/icons-material/Route';
import { Settings, Dashboard, ArrowCircleRight, ArrowCircleLeft, Edit, ErrorOutline, ExitToApp, CreditCard } from '@mui/icons-material';
import './sidebar.css';

interface MenuItemType {
  label: string;
  icon: JSX.Element;
  path: string;
}

const menuItems: MenuItemType[] = [
  { label: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  { label: 'Cards', icon: <CreditCard />, path: '/card' },
  { label: 'App Config', icon: <Settings/>, path: '/config' },
  { label: 'Utilities', icon: <Edit />, path: '/utilities' },
  { label: 'Reports', icon: <ErrorOutline />, path: '/reports' },
  { label: 'Routings', icon: <RouteIcon />, path: '/routings' },
  { label: 'Logout', icon: <ExitToApp />, path: '/logout' },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const location = useLocation(); 

  return (
    <div className="sidebar-container">
      <IconButton
        className="sidebar-toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        sx={{
          position: 'absolute',
          right: -15,
          top: 1,
          color: 'black',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'black',
          },
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        {isCollapsed ? <ArrowCircleRight /> : <ArrowCircleLeft />}
      </IconButton>
      <div className={`sidebar-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <Box>
          <MenuList sx={{ marginTop: '20px' }}>
            {menuItems.map(({ label, icon, path }) => (
              <MenuItem 
                key={path} 
                className={location.pathname === path ? 'active-menu-item' : ''}  
              >
                <Link to={path} className="menu-link">
                  <ListItemIcon>{icon}</ListItemIcon>
                  {!isCollapsed && <ListItemText primary={label} />}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </div>
    </div>
  );
};

export default Sidebar;
