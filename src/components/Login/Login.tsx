import React from 'react';
import { useMsal } from '@azure/msal-react';
import './login.css';

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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow login-card">
        <h1 className="text-center mb-4">Login with Microsoft</h1>
        <button onClick={handleLogin} className="btn btn-primary w-100">
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
};

export default Login;
