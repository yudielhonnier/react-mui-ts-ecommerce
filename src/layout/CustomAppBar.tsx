import { getTotalItems } from "@/context/reducer";
import {
  ShoppingCart,
  Help,
  Notifications,
  AccountCircle,
  Menu as MenuIcon,
  More,
  Search,
} from "@mui/icons-material";

import {
  Toolbar,
  IconButton,
  Box,
  Badge,
  alpha,
  InputBase,
  Theme,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { Link as RouteLink, Outlet, useNavigate } from "react-router-dom";

import Logo from "../assets/ecommerce.png";

import { styled } from "@mui/material";
import { useStateValue } from "@/context/StateProvider";

interface ICustomAppBarProps {
  open?: boolean;
  drawerWidth: number;
  handleDrawerOpen: () => void;
  handleProfileMenuOpen: () => void;
  handleMobileMenuOpen: () => void;
  menuId: string;
  mobileMenuId: string;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const CustomAppBar = ({
  drawerWidth,
  open,
  handleDrawerOpen,
  menuId,
  mobileMenuId,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
}: ICustomAppBarProps) => {
  const {
    state: { basket, user },
    dispatch,
  } = useStateValue();
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "none" }}
      open={open}
      drawerWidth={drawerWidth}
    >
      <Toolbar variant="dense">
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

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ mr: 5, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        <SearchDiv>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchDiv>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* TODO:ADD MUI ADAPTATION    */}
          {/* <ChangeLanguage /> */}
          {/* <IconButton aria-label="show cart items">
              <RouteLink to={"/checkout-page"}>
                <Badge badgeContent={getTotalItems(basket)} color="error">
                  <Language color="secondary" fontSize="large" />
                </Badge>
              </RouteLink>
            </IconButton> */}

          <IconButton aria-label="show cart items">
            <RouteLink to={"/checkout-page"}>
              <Badge badgeContent={getTotalItems(basket)} color="error">
                <ShoppingCart color="secondary" fontSize="medium" />
              </Badge>
            </RouteLink>
          </IconButton>

          <IconButton aria-label="show cart items">
            <Help color="secondary" fontSize="medium" />
          </IconButton>

          <IconButton aria-label="show cart items">
            <Badge>
              <Notifications color="secondary" fontSize="medium" />
            </Badge>
          </IconButton>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle color="secondary" fontSize="medium" />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <More />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
