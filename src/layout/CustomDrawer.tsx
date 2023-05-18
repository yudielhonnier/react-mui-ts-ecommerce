import { tokens } from '@/theme';
import { ChevronLeft, ChevronRight, Inbox, Mail } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

interface ICustomDrawerProps {
  open: boolean;
  drawerWidth: number;
  handleDrawerClose: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  height: '48px',
  '& .MuiBackdrop-root': {
    invisible: true,
  },
}));

// let use both drawer and main at the same time
const drawerVariant = (open: boolean) => {
  if (open) return 'permanent';
  else return 'temporary';
};

const CustomDrawer = ({ open, drawerWidth, handleDrawerClose }: ICustomDrawerProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Drawer
      variant={drawerVariant(open)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: `${colors.secondary[800]}`,
        },
      }}
      anchor='left'
      open={open}
      PaperProps={{
        sx: {
          // backgroundColor: `${theme.palette.primary}`,
          height: '100%',
          top: '44px',
        },
      }}
    >
      <DrawerHeader>
        <Typography sx={{}}>Categories</Typography>
        <IconButton
          onClick={handleDrawerClose}
          size='small'
          sx={{
            '&:focus': {
              outline: 'none',
              boxShadow: 'none', // Set the boxShadow property to none when the IconButton is focused
            },
          }}
        >
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[
          'Shoes',
          'Technology',
          'Clothes',
          'Jewerly & Watches',
          'Bags & Shoes',
          'Toy, Kids & Babies',
          'Automobiles & Motocycles',
        ].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
