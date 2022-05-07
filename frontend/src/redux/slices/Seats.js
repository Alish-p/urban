import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const fetchSeats = createAsyncThunk(
  "seat/register",
  async (student, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.get(`/api/students/seats/`, {
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
  seats: [],
};

export const seat = createSlice({
  name: "seat",
  initialState,
  reducers: {
    unset: (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.seats = [];
    },
  },
  extraReducers: {
    [fetchSeats.pending]: (state) => {
      state.loading = true;
      state.seats = [];
    },
    [fetchSeats.fulfilled]: (state, action) => {
      state.seats = action.payload;
      state.error = "";
      state.loading = false;
    },
    [fetchSeats.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.seats = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { unset } = seat.actions;

export default seat.reducer;
