import { styled } from '@mui/material/styles';

export const Main = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
<<<<<<< HEAD
  marginleft: number;
}>(({ theme, open, marginleft: marginleft }) => ({
=======
  marginLeft: number;
}>(({ theme, open, marginLeft }) => ({
>>>>>>> 6d42ad3 (fix: lint fix)
  // flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${marginleft}px`,
  }),
}));
