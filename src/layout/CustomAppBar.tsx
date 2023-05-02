import { useState, useContext } from 'react';
import {
  AccountCircle,
  DarkModeOutlined,
  Help,
  LightModeOutlined,
  Menu as MenuIcon,
  More,
  Notifications,
  Search,
  ShoppingCart,
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
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }): {} => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: theme.zIndex.drawer + 1,
}));

const SearchDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  height: '78%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const CustomAppBar = ({
  open,
  handleDrawerOpen,
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
    <AppBar
      position='fixed'
      sx={{ boxShadow: 'none' }}
      open={open}
      color='primary'
      enableColorOnDark={true}
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
          <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
        </SearchDiv>

        <SytledIconButton aria-label='show cart items' onClick={() => navigate('shopping-cart')}>
          <Badge badgeContent={getQuantityProducts(basket)} color='error' showZero={true}>
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
          <IconButton
            aria-label='show more'
            aria-controls={mobileMenuId}
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}
          >
            <More />
          </IconButton>
        </Box>
      </Toolbar>
      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        //todo : see what do when te user is logged in
        onSingIn={() => console.log('singIn user')}
      />
    </AppBar>
  );
};

export default CustomAppBar;
