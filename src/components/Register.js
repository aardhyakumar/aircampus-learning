// import React from "react";
// import "./Login.css";
// import firebase from "firebase/app";
// import "firebase/auth";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { auth, dbRef } from "../firebase.js";
// function Register() {
//   const history = useHistory();
//   const [Email, setEmail] = useState("");
//   const [fName, setfName] = useState("");
//   const [password, setPassword] = useState("");
//   const [startDate, setStartDate] = useState(false);
//   const [startYear, setStartYear] = useState(false);
//   const [college, setcollege] = useState(false);
//   const [LName, setLName] = useState("");
//   const [pay, setpay] = useState(false);
//   const [city, setcity] = useState("");

//   const register = (e) => {
//     e.preventDefault();
//     //some firebse shittttt
//     auth.createUserWithEmailAndPassword(Email, password).then((auth) => {
//       if (auth) {
//         history.push("/home");
//         setUser(auth.user);
//       }
//     });
//   };
//   const setUser = (user) => {
//     dispatch(
//       setUserLoginDetails({
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//         password: password,
//       })
//     );
//   };
//   return (
//     <div className="container">
//       <form className="form" id="login">
//         <img src="/images/new-user.png" />
//         <h1 className="form__title">Register Now</h1>
//         <div className="form__message form__message--error"></div>
//         <div className="form__input-group__left">
//           <input
//             type="text"
//             className="form__input"
//             autofocus
//             placeholder="First Name"
//             value={fName}
//             onChange={(e) => setfName(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form__input"
//             autofocus
//             placeholder="Last Name"
//             value={LName}
//             onChange={(e) => setLName(e.target.value)}
//           />
//           <div className="form__input-error-message"></div>

//           <input
//             type="text"
//             class="form__input"
//             autofocus
//             placeholder=" Email"
//             value={Email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <div className="form__input-error-message"></div>

//           <input
//             type="password"
//             class="form__input"
//             autofocus
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="form__input-error-message"></div>

//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             className="dt"
//             placeholderText="Select your Date of Birth"
//           />
//         </div>
//         <div className="form__input-group__right">
//           <DatePicker
//             selected={startYear}
//             onChange={(date) => setStartYear(date)}
//             placeholderText="12th Completion Year"
//             showYearPicker
//             className="dt"
//             dateFormat="yyyy"
//           />
//           <input
//             type="number"
//             className="form__input"
//             autofocus
//             min="0"
//             placeholder="If in College Select Year"
//             value={college}
//             onChange={(e) => setcollege(e.target.value)}
//           />

//           <div className="form__input-error-message"></div>

//           <input
//             type="number"
//             min="0"
//             class="form__input"
//             autofocus
//             placeholder="If Employed CTC (in Lakhs)"
//             value={pay}
//             onChange={(e) => setpay(e.target.value)}
//           />
//           <div className="form__input-error-message"></div>

//           <input
//             type="text"
//             class="form__input"
//             autofocus
//             placeholder="Enter City"
//             value={city}
//             onChange={(e) => setcity(e.target.value)}
//           />
//           <div className="form__input-error-message"></div>
//         </div>
//         <button className="form__button" type="submit" onClick={register}>
//           Sign Up
//         </button>
//         <p className="form__text">
//           <a className="form__link" href="/" id="linkCreateAccount">
//             Already have an account? Click here
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Register;
