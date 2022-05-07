import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./redux/slices/User";
import StudentReducer from "./redux/slices/Student";
import SeatReducer from "./redux/slices/Seats";
import RegistrationReducer from "./redux/slices/Registrations";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    student: StudentReducer,
    seat: SeatReducer,
    registration: RegistrationReducer,
  },
});
