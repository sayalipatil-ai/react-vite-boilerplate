import React from 'react';
import { useMsal } from '@azure/msal-react';
import { styles } from './styles';

const Login: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginPopup({
        scopes: ['user.read'],
      })
      .then((response) => {
        console.log('Login successful:', response);
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login with Microsoft</h1>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default Login;
