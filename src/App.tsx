import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AppRouter from './router/AppRouter';
import theme from './utils/theme'; 

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppRouter />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;