import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'YOUR_CLIENT_ID', // Replace with your Azure AD client ID
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Replace with your Azure AD tenant ID
    redirectUri: 'http://localhost:5173', // URL of your Vite dev server
  },
};
