import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Confirmation = ({ message }:{message:string}) => {
  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        {message == "Successful Payment" ? message : "An error has ocurred"}
      </Typography>
      <Divider />
      <Typography variant="subtitle2" gutterBottom sx={{ paddingTop: "10px" }}>
        {message == "Successful Payment"
          ? //todo:make booking reference
            "Your booking reference : Rgh3434343434"
          : message}
      </Typography>
      <Button component={RouteLink} to="/">
        Back to the Home Page
      </Button>
    </>
  );
};

export default Confirmation;
