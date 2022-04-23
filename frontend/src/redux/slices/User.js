import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks
export const loginUser = createAsyncThunk('user/loginUser', async (user, x) => {
  try {
    const { data } = await axios.post(`/api/users/login`, user);
    localStorage.setItem('userInfo', JSON.stringify(data));
    return data;
  } catch (error) {
    throw x.rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  localStorage.removeItem('userInfo');
});

const initialState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  error: '',
  message: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    unset: (state, { payload }) => {
      state.error = '';
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.userInfo = {};
    },
    [loginUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.error = '';
      state.loading = false;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.userInfo = {};
    },

    [logoutUser.fulfilled]: (state) => {
      state.error = '';
      state.userInfo = {};
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { unset } = user.actions;

export default user.reducer;
