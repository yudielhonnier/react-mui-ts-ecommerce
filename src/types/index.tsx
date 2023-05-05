import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface ICustomAppBarProps {
  open?: boolean;
  drawerWidth: number;
  handleDrawerOpen: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  menuId: string;
  mobileMenuId: string;
}

export interface IAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface ILoginPorps {
  open: boolean;
  onClose: () => void;
  onSingIn: () => void;
}
