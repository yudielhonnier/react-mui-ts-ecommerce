

import useStyles from "./formStyles"
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import { useStateValue } from "../../StateProvider";


const Checkout = () => {
const classes=useStyles();
const [activeStep,setActiveStep]=useState(0)
const steps = ['Shipping address', 'Payment details'];
const [{paymentMessage},dispatch]=useStateValue()
const handleNext = () => {
 return setActiveStep(activeStep + 1);
};

const handleBack = () => {
 return setActiveStep(activeStep - 1);
};

const Form =()=>{
 return (activeStep===0)
  ?<AddressForm handleNext={handleNext}/>
  :<PaymentForm handleNext={handleNext} handleBack={handleBack} />
}

  return (
    <>
    <main className={classes.layout}>
      <Paper variant="outlined" className={classes.paper}>
      <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {
            activeStep===steps.length
              ?(<Confirmation message={paymentMessage}/>)
              :(<Form/>)
          }
      
      </Paper>

    </main>
    </>
  )
}

export default Checkout