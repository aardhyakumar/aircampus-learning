import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  isNewUser: true,
  uid: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setnewUser: (state, action) => {
      [...state, (state.name = action.payload.name)];
    },
    setifnewUser: (state, action) => {
      console.log(action);
      [...state, (state.isNewUser = action.payload.isNewUser)];
    },
    setUserLoginDetails: (state, action) => {
      console.log(action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.isNewUser = action.payload.isNewUser;
      state.uid = action.payload.uid;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
      state.isnewUser = null;
      state.uid = null;
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
export const selectisUserUid = (state) => state.user.uid;
export default userSlice.reducer;
