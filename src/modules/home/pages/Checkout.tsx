import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import AddressForm from '../components/checkoutForm/AddressForm';
import Confirmation from '../components/checkoutForm/Confirmation';
import PaymentForm from '../components/checkoutForm/PaymentForm';
import { tokens } from '@/theme';

const Main = styled('div')(({ theme }) => ({
  width: 'auto',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    // [theme.breakpoints.up(600)]:{
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const CustomPaper = styled(Paper)(({ theme }) => {
  // convert themeSpacing into a unknoww to cast about in a number
  const themeSpacing: unknown = theme.spacing(3);

  return {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + (themeSpacing as number) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      marginRigth: theme.spacing(3),
    },
  };
});

const Checkout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Shipping address', 'Payment details'];

  const handleNext = () => {
    return setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    return setActiveStep(activeStep - 1);
  };

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm handleNext={handleNext} />
    ) : (
      <PaymentForm handleNext={handleNext} handleBack={handleBack} />
    );
  };

  return (
    <>
      <Main>
        <CustomPaper
          variant='outlined'
          sx={{
            background: `${
              theme.palette.mode === 'dark' ? colors.primary[500] : colors.primary[400]
            }`,
          }}
        >
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* TODO:add payment method */}
          {activeStep === steps.length ? <Confirmation message='paymentMessage' /> : <Form />}
        </CustomPaper>
      </Main>
    </>
  );
};

export default Checkout;
