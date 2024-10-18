import React from 'react';
import { SupervisedUserCircle } from '@mui/icons-material';
import './header.css'; 

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <div className="headerTitle">DOCS</div>
      <div className="headerIcon">
        <SupervisedUserCircle />
      </div>
    </div>
  );
};

export default Header;

