import axiosInstance from '../API';

import { AUTH_PATH } from '../config';

export type LoginData = {
  email: string;
  password: string;
};

const authService = {
  register: (username: string, email: string, password: string) => {
    return axiosInstance.post(AUTH_PATH + 'users', {
      username,
      email,
      password,
    });
  },

  login: (data: LoginData) => {
    return axiosInstance.post(AUTH_PATH + 'users/login', {
      user: {
        email: data.email,
        password: data.password,
      },
    });
  },

  logout: async (refreshToken: string) => {
    return await axiosInstance.post(AUTH_PATH + 'users/logout', {
      refresh_token: refreshToken,
    });
  },

  getCurrentUser: async () => {
    return await axiosInstance.get(AUTH_PATH + 'user', {});
  },

  refreshToken: async () => {
    return await axiosInstance.post(AUTH_PATH + 'token/refresh');
  },
};

export default authService;
