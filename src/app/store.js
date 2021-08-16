import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import userRegisterSlice from "../features/userRegister.js/userRegisterSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    userRegister: userRegisterSlice,
  },
});
