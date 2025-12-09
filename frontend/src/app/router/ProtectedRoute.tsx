import Spinner from '@src/components/Spinner';
import { JSX, useEffect, useState } from 'react';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  console.log('🚀 ~ ProtectedRoute ~ isAuthorized:', isAuthorized);

  const refreshToken = async () => {
    try {
      const res = await fetch('/api/token/refresh/', {
        method: 'POST',
        credentials: 'include',
      });

      if (!res.ok) return false;

      const data = await res.json();
      localStorage.setItem('access', data.access);

      return true;
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  function parseJwt(token: string) {
    try {
      const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
    } catch {
      return null;
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      const access = localStorage.getItem('access');

      if (!access) {
        setIsAuthorized(false);
        return;
      }

      const decoded = parseJwt(access);
      if (!decoded || !decoded.exp) {
        setIsAuthorized(false);
        return;
      }

      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        const refreshed = await refreshToken();
        if (refreshed != null) setIsAuthorized(refreshed);
      } else {
        setIsAuthorized(true);
      }
    };

    checkAuth();
  }, []);

  if (isAuthorized === null) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-900">
        <Spinner />
      </div>
    );
  }

  return isAuthorized ? <>{children}</> : <Navigate to="/login" />;
}
