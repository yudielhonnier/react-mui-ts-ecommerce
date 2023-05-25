import Shoe from '@/common/icons/Shoe';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCategories } from '@/store/slices/categories';
import { tokens } from '@/theme';
import { ChevronLeft, ChevronRight, Inbox, Key, Mail } from '@mui/icons-material';
import {
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const { categories, isLoading } = useAppSelector((state) => state.categories);
  // todo: fix show the circularProgress
  console.log('isLoading', isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('open', open);
    dispatch(getCategories(100));
  }, [dispatch]);

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
      <Divider />
      {isLoading ? (
        <Stack alignItems='center' my={4}>
          <CircularProgress />
        </Stack>
      ) : (
        <></>
      )}
      {/* todo: add icons */}
      <Typography sx={{}}>Categories</Typography>

      <List>
        {categories ? (
          categories.map((category, index) => (
            <ListItem key={category.id} disablePadding sx={{ display: 'block' }}>
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
                  {/* <CustomIcon paths={category.iconPath} /> */}
                </ListItemIcon>
                <ListItemText primary={category.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <></>
        )}
      </List>
      {/* TODO: FIX THIS */}
      <ListItem
        disablePadding
        sx={{ display: 'block' }}
        onClick={() => navigate('admin/categories')}
      >
        Admin Categories
      </ListItem>
    </Drawer>
  );
};

export default CustomDrawer;
