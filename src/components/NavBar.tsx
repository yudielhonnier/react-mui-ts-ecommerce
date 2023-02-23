import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/favicon250x250.png";
import { ShoppingCart } from "@mui/icons-material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Badge } from "@mui/material";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../context/reducer.types";
import { getTotalItems } from "../context/reducer";

// create customColorThemes
const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
  },
});

export default function NavBar() {
  const {
    state: { basket, user },
    dispatch,
  } = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      navigate("/");
    }
  };

  const goToSigninPage = () => {
    navigate("/signin");
  };

  console.log({ Logo });

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <RouteLink to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={Logo}
                style={{
                  marginRight: "10px",
                  height: "2rem",
                }}
              />
            </IconButton>
          </RouteLink>

          <Box sx={{ flexGrow: 1 }} />

          <Typography variant="h6" color="inherit" component="p">
            Hello {user ? user.email : "Guest"}
          </Typography>

          <div style={{}}>
            <ThemeProvider theme={theme}>
              <Button
                color="secondary"
                variant="outlined"
                sx={{ marginLeft: "10px" }}
                onClick={user ? handleAuth : goToSigninPage}
              >
                <strong>{user ? "Sing Out" : "Sign In"}</strong>
              </Button>
            </ThemeProvider>

            <IconButton aria-label="show cart items">
              <RouteLink to={"/checkout-page"}>
                <Badge badgeContent={getTotalItems(basket)} color="error">
                  <ThemeProvider theme={theme}>
                    <ShoppingCart color="secondary" fontSize="large" />
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
