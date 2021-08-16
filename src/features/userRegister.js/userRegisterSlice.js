import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  Email: "",
  WhatsappNumber: "",
  DOB: "",
  City: "",
  uid: "",
};
const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    setPersonalDetails: (state, action) => {
      console.log(action);
      state.fullName = action.payload.fullName;
      state.Email = action.payload.Email;
      state.WhatsappNumber = action.payload.WhatsappNumber;
      state.DOB = action.payload.DOB;
      state.City = action.payload.City;
      state.uid = action.payload.uid;
    },
  },
});

export const { setPersonalDetails } = userRegisterSlice.actions;
export const selectfullName = (state) => state.userRegister.fullName;
export const selectUserEmail = (state) => state.userRegister.Email;
export const selectWhatsappNumber = (state) =>
  state.userRegister.WhatsappNumber;
export const selectUserDOB = (state) => state.userRegister.DOB;
export const selectCity = (state) => state.userRegister.City;
export const selectisUserUid = (state) => state.userRegisterRegister.uid;
export default userRegisterSlice.reducer;
