import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const register = createAsyncThunk(
  "student/register",
  async (student, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.post(`/api/students/`, student, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);
// Thunks
export const HalfDayregister = createAsyncThunk(
  "student/halfdayRegister",
  async (student, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.post(`/api/students/half-day`, student, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);

export const fetchStudent = createAsyncThunk(
  "student/fetched",
  async ({ mobileNumber }, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.get(`/api/students/${mobileNumber}`, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllStudents = createAsyncThunk(
  "students/fetched",
  async (y, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.get(`/api/students/`, {
        headers: { Authorization: `Bearer ${user.userInfo.token}` },
      });

      return data;
    } catch (error) {
      throw x.rejectWithValue(error.response.data);
    }
  }
);
export const fetchHalfDayRegistrations = createAsyncThunk(
  "students/fetched-half",
  async (y, x) => {
    try {
      const { user } = x.getState();

      const { data } = await axios.get(`/api/students/half-day`, {
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
  registration: {},
  error: "",
  registered: false,
  students: [],
  halfDayRegistrations: [],
};

export const student = createSlice({
  name: "student",
  initialState,
  reducers: {
    unset: (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.registered = false;
      state.students = [];
      halfDayRegistrations: [];
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
      state.registration = {};
    },
    [register.fulfilled]: (state, action) => {
      state.registration = action.payload;
      state.error = "";
      state.loading = false;
      state.registered = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.registration = {};
      state.registered = false;
    },

    [HalfDayregister.pending]: (state) => {
      state.loading = true;
      state.registration = {};
    },
    [HalfDayregister.fulfilled]: (state, action) => {
      state.registration = action.payload;
      state.error = "";
      state.loading = false;
      state.registered = true;
    },
    [HalfDayregister.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.registration = {};
      state.registered = false;
    },

    [fetchStudent.pending]: (state) => {
      state.loading = true;
      state.registration = {};
    },
    [fetchStudent.fulfilled]: (state, action) => {
      state.registration = action.payload;
      state.error = "";
      state.loading = false;
      state.registered = true;
    },
    [fetchStudent.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.registration = {};
      state.registered = false;
    },

    [fetchAllStudents.pending]: (state) => {
      state.loading = true;
      state.students = [];
    },
    [fetchAllStudents.fulfilled]: (state, action) => {
      state.students = action.payload;
      state.error = "";
      state.loading = false;
    },
    [fetchAllStudents.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.students = [];
    },

    [fetchHalfDayRegistrations.pending]: (state) => {
      state.loading = true;
      state.halfDayRegistrations = [];
    },
    [fetchHalfDayRegistrations.fulfilled]: (state, action) => {
      state.halfDayRegistrations = action.payload;
      state.error = "";
      state.loading = false;
    },
    [fetchHalfDayRegistrations.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.halfDayRegistrations = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { unset } = student.actions;

export default student.reducer;
