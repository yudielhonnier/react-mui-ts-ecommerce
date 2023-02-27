import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  alpha,
  createStyles,
  InputBase,
  Menu,
  MenuItem,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

import Logo from "../assets/ecommerce.png";
import {
  ShoppingCart,
  AccountCircle,
  Language,
  Search,
  Notifications,
  Help,
  Menu as MenuIcon,
  Mail,
  More,
  ChevronLeft,
  ChevronRight,
  Inbox,
} from "@mui/icons-material";

import { Badge } from "@mui/material";
import { Link as RouteLink, Outlet, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { getTotalItems } from "../context/reducer";
import ChangeLanguage from "@/common/display/ChangeLanguage";
import React, { ReactNode, Suspense, useRef } from "react";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { SetHelpContext } from "@/common/feedback/HelpContext";
import AppSpin from "@/common/feedback/AppSpin";
import CustomDrawer from "./Drawer";
import { Main } from "./Main";
import MobileMenu from "./MobileMenu";
import { styled } from "@mui/material";
import CustomAppBar from "./CustomAppBar";

const drawerWidth = 240;

export default function AppLayout() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const helpNode = useRef<ReactNode | null>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <SetHelpContext.Provider
      value={(node: ReactNode) => (helpNode.current = node)}
    >
      <Suspense fallback={<AppSpin.Block />}>
        <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
          <CustomAppBar
            drawerWidth={drawerWidth}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            handleProfileMenuOpen={() => handleProfileMenuOpen}
            handleMobileMenuOpen={() => handleMobileMenuOpen}
          />
          <CustomDrawer
            open={open}
            drawerWidth={drawerWidth}
            handleDrawerClose={handleDrawerClose}
          />

          <Main open={open} marginLeft={drawerWidth}>
            <Outlet />
          </Main>
          <MobileMenu
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            mobileMenuId={mobileMenuId}
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenuClose={handleMobileMenuClose}
            handleProfileMenuOpen={() => handleProfileMenuOpen}
          />
          {renderMenu}
        </Box>
      </Suspense>
    </SetHelpContext.Provider>
  );
}
