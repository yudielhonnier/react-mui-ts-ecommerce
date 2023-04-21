import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AddressInput from './AddressInput';
import { useAppSelector } from '@/store/hooks';
import { useAppDispatch } from '@/store/store';
import { setShippingData } from '@/store/slices/checkout';

export default function AddressForm({ handleNext }: { handleNext: () => void }) {
  const methods = useForm();
  // const { shippingData } = useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            dispatch(setShippingData(data));
            handleNext();
          })}
        >
          <Grid container spacing={3}>
            <AddressInput required name='firstName' label='First Name' />
            <AddressInput required name='lastName' label='Last Name' />
            <AddressInput required name='address' label='Address' />
            <AddressInput required name='email' label='Email address' />
            <AddressInput required name='city' label='City' />
            <AddressInput required name='postcode' label='Post Code' />
          </Grid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <Button onClick={() => navigate(-1)}>Back to the Checkout Page</Button>
            <Button type='submit' variant='contained' color='primary'>
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
