import { styled } from "@mui/material/styles";

export const Main = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
  marginLeft: number;
}>(({ theme, open, marginLeft }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginLeft: 0,
    marginLeft: `${marginLeft}px`,
  }),
}));
