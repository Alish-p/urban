import { configureStore } from '@reduxjs/toolkit';

import UserReducer from './redux/slices/User';
import StudentReducer from './redux/slices/Student';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    student: StudentReducer,
  },
});
