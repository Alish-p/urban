import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const book = createAsyncThunk("waiting/book", async (student, x) => {
  try {
    const { user } = x.getState();

    const { data } = await axios.post(`/api/waitings/`, student, {
      headers: { Authorization: `Bearer ${user.userInfo.token}` },
    });

    return data;
  } catch (error) {
    throw x.rejectWithValue(error.response.data);
  }
});

export const fetchWaitings = createAsyncThunk(
  "waiting/fetched",
  async (id, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.get(`/api/waitings/`, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);

export const deleteWaitings = createAsyncThunk(
  "waiting/delete",
  async (id, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.delete(`/api/waitings/${id}`, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      console.log("dada");
      console.log(data);

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  loading: false,
  error: "",
  registered: false,
  students: [],
};

export const waiting = createSlice({
  name: "waiting",
  initialState,
  reducers: {
    unset: (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.registered = false;
      state.students = [];
    },
  },
  extraReducers: {
    [book.pending]: (state) => {
      state.loading = true;
      state.registered = false;
    },
    [book.fulfilled]: (state, action) => {
      state.error = "";
      state.loading = false;
      state.registered = true;
    },
    [book.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.registered = false;
    },
    [deleteWaitings.pending]: (state) => {
      state.loading = true;
      state.registered = false;
    },
    [deleteWaitings.fulfilled]: (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.registered = false;
      state.students = state.students.filter(
        (student) => student._id != payload._id
      );
    },
    [deleteWaitings.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.registered = false;
    },
    [fetchWaitings.pending]: (state) => {
      state.loading = true;
      state.students = [];
    },
    [fetchWaitings.fulfilled]: (state, action) => {
      state.students = action.payload;
      state.error = "";
      state.loading = false;
    },
    [fetchWaitings.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.students = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { unset } = waiting.actions;

export default waiting.reducer;
