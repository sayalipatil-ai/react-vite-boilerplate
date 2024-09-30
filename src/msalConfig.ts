import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'e083fb20-233c-4902-b623-3c0687d5b2d8', // Replace with your Azure AD client ID
    authority: 'https://login.microsoftonline.com/a6edc1af-dc14-4353-b633-622d9b4fcb9f', // Replace with your Azure AD tenant ID
    redirectUri: 'http://localhost:3001', // URL of your Vite dev server
  },
};
