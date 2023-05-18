import { H4, H5, H6 } from '@/common/Typography';
import { SytledIconButton } from '@/common/layout/StyledIconButton';
import { tokens } from '@/theme';
import { AccountCircle, Help, Mail, Notifications } from '@mui/icons-material';
import { Badge, IconButton, Menu, MenuItem, useTheme } from '@mui/material';

interface IMovilMenuProps {
  mobileMoreAnchorEl: null | HTMLElement;
  mobileMenuId: string | undefined;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu = ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}: IMovilMenuProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        '& .MuiPaper-root  ': {
          background: `${colors.secondary[800]}`,
        },
      }}
    >
      <MenuItem>
        <SytledIconButton aria-label='show 4 new mails' colorIcon='primary'>
          <Badge badgeContent={4} color='error'>
            <Help />
          </Badge>
        </SytledIconButton>
        <H5>Help</H5>
      </MenuItem>
      <MenuItem>
        <SytledIconButton aria-label='show 11 new notifications' colorIcon='secondary'>
          <Badge badgeContent={11} color='error'>
            <Notifications />
          </Badge>
        </SytledIconButton>
        <H5>Notifications</H5>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <SytledIconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          colorIcon='inherit'
        >
          <AccountCircle />
        </SytledIconButton>
        <H5>Profile</H5>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
