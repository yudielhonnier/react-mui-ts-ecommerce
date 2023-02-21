import { useEffect, useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import Products from './components/Products'   
import CheckoutPage from './components/CheckoutPage'   
import {Routes,BrowserRouter,Route} from "react-router-dom";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { auth } from './firebase'
import { actionTypes } from './reducer'
import {useStateValue} from './StateProvider';
import Checkout from './components/checkoutForm/Checkout'
import { ThemeProvider } from '@mui/material/styles'

import { createTheme } from '@mui/material/styles';
import { blue, lightBlue,yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightBlue[500],
    },
    letters:{
      main:blue[100]
    }
  },
});

function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log('authUser', authUser)
      if(authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user:authUser
        })
      }
    })
  },[]);


  return (
      <ThemeProvider  theme={theme}>
      <BrowserRouter>
    <div className="App">
     <NavBar/>
    
     <Routes>
       <Route path="/" element={<Products/>}/>
       <Route path="/checkout-page" element={<CheckoutPage/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
    </div>
     </BrowserRouter>
     </ThemeProvider>
  )
}

export default App
 