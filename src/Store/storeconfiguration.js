import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import loanReducer from "./Slice/loanSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    loan: loanReducer,

  },
});
