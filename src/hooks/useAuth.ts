import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService, { LoginData } from '../services/auth.service';
import authSlice from '../store/slices/auth';

export const useAuth = () => {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async (data: LoginData) => {
    try {
      setLoading(true);
      const res = await authService.login(data);
      dispatch(
        authSlice.actions.setAuthTokens({
          token: res.data.access,
          refreshToken: res.data.refresh,
        })
      );
      dispatch(
        authSlice.actions.setAccount({
          user: res.data.user,
        })
      );
      navigate('/');
    } catch (err: any) {
      setError(err.response.data.detail);
    }
    setLoading(false);
  };

  return {
    loginUser,
    error,
    loading,
  };
};
