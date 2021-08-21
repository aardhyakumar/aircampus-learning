import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  Email: "",
  WhatsappNumber: "",
  DOB: "",
  City: "",
  password: "",
  PersonalDetailsDone: false,
  confirmpassword: "",
  CollegeYear: "",
  Graduate: "",
  StillInCollege: "",
  InterCompletionYear: "",
  Employed: "",
  CompletionYear: "",
  AcademicDetailsDone: false,
  Course: "",
  Branch: "",
  Salary: "",
  CourseDetailsDone: false,
  CourseSelected: "",
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
      state.password = action.payload.password;
      state.PersonalDetailsDone = action.payload.PersonalDetailsDone;
      state.confirmpassword = action.payload.confirmpassword;
    },
    setAcademicDetails: (state, action) => {
      console.log(action);
      [
        ...state,
        ((state.CollegeYear = action.payload.CollegeYear),
        (state.Graduate = action.payload.Graduate),
        (state.StillInCollege = action.payload.StillInCollege),
        (state.Employed = action.payload.Employed),
        (state.CompletionYear = action.payload.CompletionYear),
        (state.Course = action.payload.Course),
        (state.Branch = action.payload.Branch),
        (state.Salary = action.payload.Salary)),
        (state.InterCompletionYear = action.payload.InterCompletionYear),
        (state.AcademicDetailsDone = action.payload.AcademicDetailsDone),
      ];
    },
    setCourseDetails: (state, action) => {
      [
        ...state,
        (state.CourseDetailsDone = action.payload.CourseDetailsDone),
        (state.CourseSelected = action.payload.CourseSelected),
      ];
    },
  },
});

export const { setPersonalDetails, setAcademicDetails, setCourseDetails } =
  userRegisterSlice.actions;
export const selectfullName = (state) => state.userRegister.fullName;
export const selectUserEmail = (state) => state.userRegister.Email;
export const selectWhatsappNumber = (state) =>
  state.userRegister.WhatsappNumber;
export const selectUserDOB = (state) => state.userRegister.DOB;
export const selectCity = (state) => state.userRegister.City;
export const selectUserPassword = (state) => state.userRegister.password;
export const selectUserConfirmPassword = (state) =>
  state.userRegister.confirmpassword;
export const selectPersonalDetailsDone = (state) =>
  state.userRegister.PersonalDetailsDone;
export const selectAcademicDetailsDone = (state) =>
  state.userRegister.AcademicDetailsDone;
export const selectCollegeYear = (state) => state.userRegister.CollegeYear;
export const selectGraduate = (state) => state.userRegister.Graduate;
export const selectifStillInCollege = (state) =>
  state.userRegister.StillInCollege;
export const selectifEmployed = (state) => state.userRegister.Employed;
export const selectCompletionYear = (state) =>
  state.userRegister.CompletionYear;
export const selectCourse = (state) => state.userRegister.Course;
export const selectBranch = (state) => state.userRegister.Branch;
export const selectSalary = (state) => state.userRegister.Salary;
export const selectInterCompletionYear = (state) =>
  state.userRegister.InterCompletionYear;
export const selectCourseSelected = (state) =>
  state.userRegister.CourseSelected;
export const selectCourseDetailsDone = (state) =>
  state.userRegister.CourseDetailsDone;
export default userRegisterSlice.reducer;
