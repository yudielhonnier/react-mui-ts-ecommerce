import { ChevronRight, ChevronLeft, Inbox, Mail } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

interface ICustomDrawerProps {
  open: boolean;
  drawerWidth: number;
  handleDrawerClose: () => void;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  height: "48px",
  "& .MuiBackdrop-root": {
    invisible: true,
  },

  // root: {
  //   position: "relative !important",
  //   "& .MuiBackdrop-root": {
  //     position: "relative !important",
  //     height: "100vh",
  //   },
  // },
  // paper: {
  //   position: "absolute !important",
  // },
  // necessary for content to be below app bar
}));

//let use both drawer and main at the same time
const drawerVariant = (open: boolean) => {
  if (open) return "permanent";
  else return "temporary";
};

const CustomDrawer = ({
  open,
  drawerWidth,
  handleDrawerClose,
}: ICustomDrawerProps) => {
  const theme = useTheme();

  return (
    <Drawer
      variant={drawerVariant(open)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      open={open}
      PaperProps={{
        sx: {
          height: "100%",
          top: "44px",
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} size="small">
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
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
