import { createBrowserRouter } from 'react-router-dom';
import Home from '@src/pages/Home/Home';
import Login from '@src/pages/Login/Login';
import Register from '@src/pages/Register/Register';
import Dashboard from '@src/pages/Dashboard/Dashboard';

export default function useCustomRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Home,
      children: [{ index: true, Component: Home }],
    },
    {
      path: 'login',
      Component: Login,
    },
    {
      path: 'register',
      Component: Register,
    },
    {
      path: 'dashboard',
      Component: Dashboard,
    },
  ]);

  return router;
}
