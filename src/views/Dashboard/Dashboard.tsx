import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { styles } from './styles';
import { useMsal } from '@azure/msal-react';
import Button from '@mui/material/Button';

const Dashboard: React.FC = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogout = () => {
    instance.logoutPopup().then(() => {
      console.log('Logged out successfully');
      navigate('/'); 
    }).catch((error) => {
      console.error('Logout failed:', error);
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Dashboard!</h1>
      <Link to="/dashboard" style={styles.link}>
        Back to Login
      </Link>
      <Button
        variant="contained"
        color="secondary"
        style={styles.button}
        onClick={handleLogout}
      >
        Sign out
      </Button>
    </div>
  );
};

export default Dashboard;


