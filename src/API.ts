import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import store from './store';
import { BASE_API_URL, AUTH_PATH } from './config';
import authSlice from './store/slices/auth';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config: any) => {
  const { token } = store.getState().auth;

  if (token !== null) {
    config.headers.Authorization = 'Bearer ' + token;
    // @ts-ignore
    console.debug(
      '[Request]',
      config.baseURL + config.url,
      JSON.stringify(token)
    );
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res: any) => {
    console.debug(
      '[Response]',
      res.config.baseURL + res.config.url,
      res.status,
      res.data
    );
    return Promise.resolve(res);
  },
  (err) => {
    console.debug(
      '[Response]',
      err.config.baseURL + err.config.url,
      err.response.status,
      err.response.data
    );
    return Promise.reject(err);
  }
);

// TODO: This fires for login attempt.  Can we prevent?  OR is there a better way?
const refreshAuthLogic = async (failedRequest: any) => {
  const { refreshToken } = store.getState().auth;
  if (refreshToken !== undefined && refreshToken !== null) {
    return axios
      .post(
        `${BASE_API_URL}${AUTH_PATH}users/login/refresh`,
        {
          refresh: refreshToken,
        },
        {
          baseURL: process.env.REACT_APP_API_URL,
        }
      )
      .then((resp) => {
        const { access, refresh } = resp.data;
        failedRequest.response.config.headers.Authorization =
          'Bearer ' + access;
        store.dispatch(
          authSlice.actions.setAuthTokens({
            token: access,
            refreshToken: refresh,
          })
        );
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          store.dispatch(authSlice.actions.setLogout());
        }
      });
  } else {
    store.dispatch(authSlice.actions.setLogout());
  }
};

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);

export default axiosInstance;
