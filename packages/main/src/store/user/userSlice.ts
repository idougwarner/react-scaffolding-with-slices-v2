import { validateToken } from '@/services/user/validateToken';
import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from './types';

const initialState: UserState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isAuthenticated: false,
  status: '',
};

//An example to use redux-thunk
export const validateTokenThunk = createAsyncThunk('users/validateSession', async (token: string) => {
  return await validateToken(token);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticated(state: UserState, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    },
    setUser(state: UserState, { payload }: PayloadAction<User>) {
      state.user = payload;
    },
    setToken(state: UserState, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    resetUser: () => initialState,
  },
  // redux thunk will be added in extraReducers
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    // Pending state of API
    builder.addCase(validateTokenThunk.pending, (state: UserState) => {
      state.status = 'loading';
    });

    // On getting API response
    builder.addCase(validateTokenThunk.fulfilled, (state: UserState, { payload }) => {
      state.status = '';
      state.token = payload.token;
    });

    // On promise rejection
    builder.addCase(validateTokenThunk.rejected, (state: UserState) => {
      state.status = '';
      state.token = '';
    });
  },
});

export const { setAuthenticated, resetUser, setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
