  import React from 'react';
  import { useRoutes, Navigate  } from 'react-router-dom';
  import { LoginRoute, DashboardRoute, CardRoute} from '../views';

  const routes = [
    LoginRoute,
    DashboardRoute,
    CardRoute,
    {
      path: '*', 
      element: <Navigate to="/dashboard" replace />, 
    },
  ];

  const AppRouter: React.FC = () => {
    const element = useRoutes(routes);
    return <>{element}</>;
  };

  export default AppRouter;















// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LoginView from './LoginView';
// import DashboardView from './DashboardView';
// import { useIsAuthenticated } from '@azure/msal-react';


// const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
//   const isAuthenticated = useIsAuthenticated();
//   return isAuthenticated ? children : <Navigate to="/" />;
// };

// const AppRouter: React.FC = () => {
//   const isAuthenticated = useIsAuthenticated();

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginView />} />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <DashboardView />
//             </PrivateRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
