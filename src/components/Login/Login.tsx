
import React, { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styles } from './styles';

const Login: React.FC = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    instance
      .loginPopup({
        scopes: ['user.read'],
      })
      .then((response) => {
        console.log('Login successful:', response);
        navigate('/dashboard'); 
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login with Microsoft</h1>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={handleLogin}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor || '';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = styles.button.backgroundColor || '';
          }}
        >
          Sign in with Microsoft
        </Button>
      </div>
    </div>
  );
};

export default Login;
