import { Box, Menu, MenuItem } from '@mui/material'
import React, { ReactNode, Suspense, useRef } from 'react'
import { Outlet } from 'react-router-dom'

import AppSpin from '@/common/feedback/AppSpin'
import { SetHelpContext } from '@/common/feedback/HelpContext'

import CustomAppBar from './CustomAppBar'
import CustomDrawer from './CustomDrawer'
import { Main } from './Main'
import MobileMenu from './MobileMenu'

const drawerWidth = 240

export default function AppLayout() {
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const helpNode = useRef<ReactNode | null>(null)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'

  return (
    <SetHelpContext.Provider value={(node: ReactNode) => (helpNode.current = node)}>
      <Suspense fallback={<AppSpin.Block />}>
        <Box sx={{ flexGrow: 1, marginBottom: '7rem' }}>
          <CustomAppBar
            drawerWidth={drawerWidth}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleMobileMenuOpen={handleMobileMenuOpen}
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
            handleProfileMenuOpen={handleProfileMenuOpen}
          />
          {renderMenu}
        </Box>
      </Suspense>
    </SetHelpContext.Provider>
  )
}
