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
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { useNavigate } from "react-router-dom";

import Logo from "../assets/ecommerce.png";

import { styled } from "@mui/material";
import { useStateValue } from "@/context/StateProvider";
import { SytledIconButton } from "@/common/layout/StyledIconButton";

interface ICustomAppBarProps {
  open?: boolean;
  drawerWidth: number;
  handleDrawerOpen: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
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
  zIndex: theme.zIndex.drawer + 1,
}));

const SearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  height: "78%",
  [theme.breakpoints.up("sm")]: {
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
    padding: theme.spacing(1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "100%",
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

  // TODO:ADD VALIDATION TO LOGGIN
  const isLoggin = false;

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "none" }}
      open={open}
      drawerWidth={drawerWidth}
    >
      <Toolbar variant="dense">
        {/* TODO:ADD TOOLTIP TO ALL THE BUTTONS */}
        <SytledIconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => navigate("")}
          // sx={{ mr: 2 }}
        >
          <img
            src={Logo}
            style={{
              height: "2rem",
            }}
          />
        </SytledIconButton>

        <SytledIconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ mr: 5 }}
        >
          <MenuIcon />
        </SytledIconButton>
        <Box sx={{ flexGrow: 1 }} />

        <SearchDiv>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchDiv>

        <SytledIconButton
          aria-label="show cart items"
          onClick={() => navigate("shopping-cart")}
        >
          <Badge
            badgeContent={getTotalItems(basket)}
            color="error"
            showZero={true}
          >
            <ShoppingCart color="secondary" fontSize="medium" />
          </Badge>
        </SytledIconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* TODO:ADD MUI ADAPTATION    */}
          {/* <ChangeLanguage /> */}
          {/* <SytledIconButton aria-label="show cart items">
              <RouteLink to={"/checkout-page"}>
                <Badge badgeContent={getTotalItems(basket)} color="error">
                  <Language color="secondary" fontSize="large" />
                </Badge>
              </RouteLink>
            </SytledIconButton> */}

          <SytledIconButton aria-label="show cart items">
            <Help color="secondary" fontSize="medium" />
          </SytledIconButton>

          <SytledIconButton aria-label="show cart items">
            <Badge>
              <Notifications color="secondary" fontSize="medium" />
            </Badge>
          </SytledIconButton>

          <SytledIconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            {isLoggin ? (
              <AccountCircle color="secondary" fontSize="medium" />
            ) : (
              <p>SignIn</p>
            )}
          </SytledIconButton>
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
