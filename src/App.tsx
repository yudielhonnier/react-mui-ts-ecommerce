// import { useEffect } from "react";
// import "./App.css";

// import NavBar from "./layout/NavBar";
// import Products from "./modules/home/pages/Products";
// import CheckoutPage from "./components/CheckoutPage";
// import { Routes, BrowserRouter, Route } from "react-router-dom";
// import SignIn from "./modules/auth/components/SignIn";
// import SignUp from "./components/SignUp";
// import { auth } from "./firebase";
// import { actionTypes } from "./context/reducer.types";
// import { useStateValue } from "./context/StateProvider";
// import Checkout from "./components/checkoutForm/Checkout";
// import { ThemeProvider } from "@mui/material/styles";

// import { createTheme } from "@mui/material/styles";
// import { blue, lightBlue, yellow } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: blue[500],
//     },
//     secondary: {
//       main: lightBlue[500],
//     },
//   },
// });

// function App() {
//   console.log(import.meta.env.REACT_APP_FIREBASE_API_KEY);

//   const { dispatch } = useStateValue();

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       console.log("authUser", authUser);
//       if (authUser) {
//         dispatch({
//           type: actionTypes.SET_USER,
//           user: authUser,
//         });
//       }
//     });
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Products />} />
//             <Route path="/checkout-page" element={<CheckoutPage />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/checkout" element={<Checkout />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;
