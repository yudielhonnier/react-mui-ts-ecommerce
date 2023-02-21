import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/favicon700x700.png';
import { ShoppingCart } from '@mui/icons-material';

import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Badge } from '@mui/material';
import {Link as RouteLink,useNavigate} from "react-router-dom";
import {useStateValue} from '../StateProvider';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { actionTypes } from '../reducer';
import { getTotalItems } from '../reducer';



// create customColorThemes
const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
      darker: '#000',
    },
    
  },
});


export default function NavBar() {
  const [{basket,user},dispatch]=useStateValue();
  const navigate=useNavigate();

  const handleAuth=()=>{
    if(user){
      auth.signOut()
      dispatch({
        type:actionTypes.EMPTY_BASKET,
        basket:[]
      });
      dispatch({
        type:actionTypes.SET_USER,
        user:null
      });
      navigate('/')
    }
  }

  const goToSigninPage=()=>{
    navigate('/signin')
  }

 
  return (
    <Box sx={{ flexGrow: 1 ,marginBottom:"7rem"}}>
      <AppBar position="fixed" sx={{boxShadow:"none"}}>
        <Toolbar>
         
          <RouteLink to='/'>
          <IconButton
            size="large"
            edge="start" 
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <img src={logo} style={{
              marginRight:"10px",
              height:"2rem"}}/>
          </IconButton> 
          </RouteLink>

          <Box sx={{ flexGrow: 1 }} />

          <Typography variant="h6" color="inherit" component="p">
            Hello {user?user.email:"Guest"}
          </Typography>
  
          <div
           style={{}}
           >

          <ThemeProvider theme={theme}>
            <Button 
            color="secondary"
            variant="outlined"
            sx={{marginLeft:'10px'}}
            onClick={user?handleAuth:goToSigninPage}
             >
          <strong>{user?'Sing Out':'Sign In'}</strong>
          </Button>
          </ThemeProvider>
          
          <IconButton aria-label='show cart items' >
          <RouteLink to={"/checkout-page"}>
          <Badge badgeContent={getTotalItems(basket)} color="error">
          <ThemeProvider theme={theme}> 
           <ShoppingCart color="secondary" fontSize='large'/> 
           </ThemeProvider>
          </Badge>
           </RouteLink>
          </IconButton>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
