import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  AiOutlineBarChart,
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineQuestion,
  AiOutlineUser,
  AiOutlineYoutube,
} from "react-icons/ai";

import Logo from "../assets/ecommerce.png";
import { ShoppingCart } from "@mui/icons-material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Badge } from "@mui/material";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../modules/auth/services/firebase";
import { actionTypes } from "../context/reducer.types";
import { getTotalItems } from "../context/reducer";
import ChangeLanguage from "@/common/display/ChangeLanguage";

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

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <RouteLink to="/">
            {/* TODO:ADD TOOLTIP TO ALL THE BUTTONS */}
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
            <Button
              color="secondary"
              variant="outlined"
              sx={{ marginLeft: "10px" }}
              onClick={user ? handleAuth : goToSigninPage}
            >
              <strong>{user ? "Sing Out" : "Sign In"}</strong>
            </Button>
            {/* TODO:ADD MUI ADAPTATION    */}
            <ChangeLanguage />

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
