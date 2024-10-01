import React from 'react';
import { Link } from 'react-router-dom'; 
import { styles } from '../Dashboard/styles';

const Dashboard: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Dashboard!</h1>
      <Link to="/login" style={styles.link}>
        Back to Login
      </Link>
    </div>
  );
};

export default Dashboard;
