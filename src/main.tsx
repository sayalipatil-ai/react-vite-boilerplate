import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './utils/msalConfig';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './utils/theme';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <ThemeProvider theme={theme}>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
