import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';

export interface ICustomAppBarProps {
  open?: boolean;
  drawerWidth: number;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
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

export interface IHeadCell {
  id: Key | null | undefined;
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit' | undefined;
  label:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}
