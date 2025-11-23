import { createBrowserRouter } from 'react-router';
import Home from '@src/pages/Home/Home';
import Login from '@src/pages/Login/Login';
import Register from '@src/pages/Register/Register';
import Dashboard from '@src/pages/Dashboard/Dashboard';
import Layout from '@src/pages/Layout/Layout';

export default function useCustomRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: 'login', Component: Login },
        { path: 'register', Component: Register },
        { path: 'dashboard', Component: Dashboard },
      ],
    },
  ]);

  return router;
}
