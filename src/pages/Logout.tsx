import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/auth.service';
import store from '../store';
import authSlice from '../store/slices/auth';

const Logout: React.FC = () => {
  useEffect(() => {
    const { refreshToken } = store.getState().auth;
    store.dispatch(authSlice.actions.setLogout());
    if (refreshToken) {
      authService
        .logout(refreshToken)
        .then(() => {})
        .catch(() => {});
    }
  }, []);
  return <Navigate to={'/login'} />;
};

export default Logout;
