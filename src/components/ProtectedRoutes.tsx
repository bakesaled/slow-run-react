import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { RootState } from '../store';
import NotFound from './NotFound';

const ProtectedRoutes: React.FC<RouteProps> = (props: RouteProps) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.account) {
    if (props.path === '/login') {
      return <Navigate to={'/'} />;
    }
    return <Outlet />;
  } else if (!auth.account) {
    return <Navigate to={'/login'} />;
  } else {
    return <NotFound></NotFound>;
  }
};

export default ProtectedRoutes;
