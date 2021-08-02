import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  password: "",
  isNewUser: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setnewUser: (state, action) => {
      [...state, (state.name = action.payload.name)];
    },
    setifnewUser: (state, action) => {
      [...state, (state.isNewUser = action.payload.isNewUser)];
    },
    setUserLoginDetails: (state, action) => {
      console.log(action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.password = action.payload.password;
      state.isNewUser = action.payload.isNewUser;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
      state.password = null;
      state.isnewUser = null;
    },
  },
});

export const {
  setSignOutState,
  setUserLoginDetails,
  setnewUser,
  setifnewUser,
} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export const selectUserPassword = (state) => state.user.password;
export const selectisNewUser = (state) => state.user.isNewUser;
export default userSlice.reducer;
