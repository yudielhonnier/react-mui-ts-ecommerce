import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  const themeSpacing: unknown = theme.spacing(3);

  return {
    appBar: {
      position: "relative",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        // [theme.breakpoints.up(600)]:{
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + (themeSpacing as number) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        marginRigth: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  };
});
export default useStyles;
