import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const fetchExpires = createAsyncThunk(
  "Expire/fetch",
  async (student, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.get(`/api/students/expires/`, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);

// Thunks
export const fetchTodaysData = createAsyncThunk(
  "TodaysData/fetch",
  async (student, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.get(`/api/students/todays/`, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  loading: false,
  error: "",
  message: "",
  expires: [],
  expired: [],
  todaysRegistration: [],
  todaysRenew: [],
};

export const Registration = createSlice({
  name: "Registration",
  initialState,
  reducers: {
    unset: (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.expires = [];
      state.expired = [];
      state.todaysRegistration = [];
      state.todaysRenew = [];
    },
  },
  extraReducers: {
    [fetchExpires.pending]: (state) => {
      state.loading = true;
      state.expired = [];
      state.expires = [];
    },
    [fetchExpires.fulfilled]: (state, action) => {
      state.expires = action.payload.expires;
      state.expired = action.payload.expired;
      state.error = "";
      state.loading = false;
    },
    [fetchExpires.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.expired = [];
      state.expires = [];
    },
    [fetchTodaysData.pending]: (state) => {
      state.loading = true;
      state.todaysRegistration = [];
      state.todaysRenew = [];
    },
    [fetchTodaysData.fulfilled]: (state, action) => {
      state.todaysRegistration = action.payload.registrations;
      state.todaysRenew = action.payload.renews;
      state.error = "";
      state.loading = false;
    },
    [fetchTodaysData.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.todaysRegistration = [];
      state.todaysRenew = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { unset } = Registration.actions;

export default Registration.reducer;
