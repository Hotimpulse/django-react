import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '@src/pages/Home/Home';
import Dashboard from '@src/pages/Dashboard/Dashboard';
import Layout from '@src/pages/Layout/Layout';
import Form from '@src/components/form/Form';
import Error404 from '@src/pages/Error404/Error404';

export default function useCustomRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      ErrorBoundary: Error404,
      children: [
        { index: true, Component: Home },
        { path: 'login', Component: () => React.createElement(Form, { route: 'api/token/', method: 'login' }) },
        {
          path: 'register',
          Component: () => React.createElement(Form, { route: 'api/user/register/', method: 'register' }),
        },
        { path: 'dashboard', Component: Dashboard },
      ],
    },
  ]);

  return router;
}
