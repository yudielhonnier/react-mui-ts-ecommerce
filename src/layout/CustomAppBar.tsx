import { useState, useContext } from 'react';
import {
  AccountCircle,
  DarkModeOutlined,
  Help,
  LightModeOutlined,
  Menu as MenuIcon,
  DoubleArrow as DoubleArrowIcon,
  KeyboardDoubleArrowLeft as LeftArrowIcon,
  KeyboardDoubleArrowRight as RightArrowIcon,
  Notifications,
  Search,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
} from '@mui/icons-material';
import { alpha, Badge, Box, IconButton, InputBase, Toolbar, styled, useTheme } from '@mui/material';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';

// import { SytledIconButton } from '@/common/layout/StyledIconButton';

import Logo from '../assets/ecommerce.png';
import { useAppSelector } from '@/store/hooks';
import Product from '@/modules/home/models/Product';
import { tokens, ColorModeContext } from '@/theme';
import { SytledIconButton } from '@/common/layout/StyledIconButton';
import useAuth from '@/modules/auth/hooks/useAuth';
import { H4 } from '@/common/Typography';
import { FlexBox, FlexRowCenter } from '@/common/flex-box';

import { getNameFromEmail } from '@/utils/utilString';
import OvalButton from '@/common/buttons/OvalButton';
import LayoutModal from '@/common/modal/LayoutModal';
import Login from '@/common/modal/login';
import { af } from 'date-fns/locale';
import { ICustomAppBarProps } from '@/types';
import {
  SearchDiv,
  SearchIconWrapper,
  StyledAppBar,
  StyledInputBase,
} from '@/common/styles-components';

const CustomAppBar = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
  menuId,
  mobileMenuId,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
}: ICustomAppBarProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const navigate = useNavigate();
  const { basket } = useAppSelector((state) => state.basket);

  // TODO:ADD VALIDATION TO LOGGIN
  const authState = useAuth();
  const user = authState?.user;
  const isLoggin = user ?? false;

  const getQuantityProducts = (basket: Product[]) => {
    let total = 0;
    basket.forEach((el) => (total += el.quantity));
    return total;
  };

  return (
    <StyledAppBar
      position='fixed'
      sx={{
        background: `${
          theme.palette.mode === 'dark' ? colors.secondary[800] : colors.secondary[300]
        }`,
      }}
      open={open}
      color='secondary'
      // enableColorOnDark={true}
    >
      <Toolbar variant='dense'>
        {/* TODO:ADD TOOLTIP TO ALL THE BUTTONS */}
        <SytledIconButton
          size='large'
          edge='start'
          aria-label='menu'
          onClick={() => navigate('')}
          theme={theme}
          // color='white'
          // sx={{ mr: 2 }}
        >
          <img
            src={Logo}
            style={{
              height: '2rem',
            }}
            alt='logo'
          />
        </SytledIconButton>

        <SytledIconButton
          size='large'
          edge='start'
          aria-label='open drawer'
          onClick={open ? handleDrawerClose : handleDrawerOpen}
        >
          {open ? <LeftArrowIcon /> : <MenuIcon />}
        </SytledIconButton>

        <Box sx={{ flexGrow: 1 }} />

        <SearchDiv>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
        </SearchDiv>

        <SytledIconButton aria-label='show cart items' onClick={() => navigate('shopping-cart')}>
          <Badge
            badgeContent={getQuantityProducts(basket)}
            showZero={true}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: `${colors.redAccent[500]}`,
              },
            }}
          >
            <ShoppingCart fontSize='medium' />
          </Badge>
        </SytledIconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* TODO:ADD MUI ADAPTATION    */}
          {/* <ChangeLanguage /> */}
          {/* <SytledIconButton aria-label="show cart items">
              <RouteLink to={"/checkout-page"}>
                <Badge badgeContent={getTotalItems(basket)} color="error">
                  <Language color="secondary" fontSize="large" />
                </Badge>
              </RouteLink>
            </SytledIconButton> */}

          {/* TODO:FIX APPBAR COLOR */}
          <SytledIconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
          </SytledIconButton>

          <SytledIconButton aria-label='show cart items'>
            <Help fontSize='medium' />
          </SytledIconButton>

          <SytledIconButton aria-label='show cart items'>
            <Badge>
              <Notifications fontSize='medium' />
            </Badge>
          </SytledIconButton>
          <FlexRowCenter gap={1}>
            {isLoggin ? (
              <SytledIconButton
                theme={theme}
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
              >
                <AccountCircle fontSize='medium' />
                <H4>Hi, {user?.email && getNameFromEmail(user?.email)}</H4>
              </SytledIconButton>
            ) : (
              // todo: make a cta for this
              <OvalButton
                background={{
                  normal: `${colors.redAccent[500]}`,
                  hover: `${colors.greenAccent[500]}`,
                }}
                onClick={() => setOpenLogin(true)}
              >
                <H4>Sign in</H4>
              </OvalButton>
            )}
          </FlexRowCenter>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <SytledIconButton
            aria-label='show more'
            aria-controls={mobileMenuId}
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </SytledIconButton>
        </Box>
      </Toolbar>
      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        //todo : see what do when te user is logged in
        onSingIn={() => console.log('singIn user')}
      />
    </StyledAppBar>
  );
};

export default CustomAppBar;
