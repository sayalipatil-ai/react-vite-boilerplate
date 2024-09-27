# react-vite-boilerplate

1. **Microsoft Entra ID Integration:**
Objective: To integrate Microsoft Entra ID for secure user authentication, providing features like Single Sign-On (SSO) and Multi-Factor Authentication (MFA). This will enhance the security of our application while improving the user login experience.

**Authentication Flow:**
The user will be redirected to Microsoft Entra ID for authentication.
After successful login, the user will be redirected back to our app, where an access token will be used to authenticate API requests and access protected resources.
Key Components:

MSAL (Microsoft Authentication Library): We’ll use @azure/msal-react to handle the authentication flow within our React application.
Configuration: The app will require the client ID, tenant ID, and redirect URI to be set up correctly in the authConfig.js file.

**Key Points on Using Microsoft Entra ID**
No Direct Username/Password Fields: You typically do not create your own username and password fields. Instead, users are redirected to Microsoft’s login page to enter their credentials.

Single Sign-On (SSO): If users are already signed in to their Microsoft accounts in their browsers, they may not even see the login page; they will be authenticated automatically.

Login Method: You can still provide an option for users to sign in using other methods (like Microsoft accounts), but you should always rely on the Microsoft authentication mechanism to handle credentials.


2. **Vite Setup with React:**
Why Vite:
Development Speed: Vite provides an optimized development experience with faster hot module replacement (HMR) compared to Webpack.
Modern Build Tool: Vite uses native ES modules and offers better performance for both local development and production builds.
Setup:
The application has been initialized with Vite for React, improving the efficiency of our development environment. It also allows for faster feedback during development, which is crucial when implementing authentication flows that need frequent testing.
Here’s the structure:
React: As our frontend framework.
Vite: For fast development and optimized builds.
