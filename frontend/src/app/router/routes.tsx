import { Route } from 'react-router';
import { Suspense, lazy, type JSX } from 'react';
import { Skeleton } from '@src/components/ui/skeleton';
import Spinner from '@src/components/Spinner';

// user public routes
const LazyPublicHome = lazy(() => import('@src/pages/Home/Home'));
const LazyLogin = lazy(() => import('@src/pages/Login/Login'));
const LazyRegister = lazy(() => import('@src/pages/Register/Register'));

// user private routes
// const LazyPrivateHome = lazy(() => import('@src/pages/Home/PrivateHome'));

// admin private routes
const LazyAdminDashboard = lazy(() => import('@src/pages/Dashboard/Dashboard'));
// const LazyAdminRenderTable = lazy(() => import('@src/pages/Form/AdminRenderTable'));

export const publicRoutes: JSX.Element[] = [
  <Route
    key={'0'}
    path="/"
    element={
      <Suspense fallback={<Spinner />}>
        <LazyPublicHome />
      </Suspense>
    }
  />,
  <Route
    key={'1'}
    path="/login"
    element={
      <Suspense fallback={<Spinner />}>
        <LazyLogin />
      </Suspense>
    }
  />,
  <Route
    key={'2'}
    path="/register"
    element={
      <Suspense fallback={<Spinner />}>
        <LazyRegister />
      </Suspense>
    }
  />,
];

export const privateAdminRoutes: JSX.Element[] = [
  <Route
    key={'0'}
    path="/dashboard"
    element={
      <Suspense fallback={<Skeleton />}>
        <LazyAdminDashboard />
      </Suspense>
    }
  />,
  // <Route
  //   key={'2'}
  //   path="/dashboard/adminform/:userId"
  //   element={
  //     <Suspense fallback={<Skeleton />}>
  //       <LazyAdminRenderTable />
  //     </Suspense>
  //   }
  // />,
];
