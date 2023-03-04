import { AccountCircle, Mail, Notifications } from '@mui/icons-material'
import { Badge, IconButton, Menu, MenuItem } from '@mui/material'

interface IMovilMenuProps {
  mobileMoreAnchorEl: null | HTMLElement
  mobileMenuId: string | undefined
  isMobileMenuOpen: boolean
  handleMobileMenuClose: (event: React.MouseEvent<HTMLElement>) => void
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

const MobileMenu = ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}: IMovilMenuProps) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <Mail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
}

export default MobileMenu
