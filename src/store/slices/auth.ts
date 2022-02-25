import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserResponse = {
  email: string;
  username: string;
  is_active: string;
  created: Date;
  updated: Date;
  id: string;
};

export type AccountResponse = {
  user: {
    id: string;
    email: string;
    username: string;
    is_active: boolean;
  };
  access: string;
  refresh: string;
};

type State = {
  token: string | null;
  refreshToken: string | null;
  account: AccountResponse | null;
};

const initialState: State = { token: null, refreshToken: null, account: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens(
      state: State,
      action: PayloadAction<{ token: string; refreshToken: string }>
    ) {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    },
    setAccount(state: State, action: PayloadAction<any>) {
      state.account = action.payload;
    },
    setLogout(state: State) {
      state.account = null;
      state.refreshToken = null;
      state.token = null;
    },
  },
});

export default authSlice;
