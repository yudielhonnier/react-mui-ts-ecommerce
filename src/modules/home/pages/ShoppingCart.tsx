import { Box, Typography } from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2'

import Page from '@/common/layout/Page'
import { useStateValue } from '@/context/StateProvider'

import CheckoutCart from '../components/CheckoutCart'
import Total from '../components/Total'

// TODO: FIX THIS PAGE
export default function ShoppingCart() {
  const {
    state: { basket, user },
  } = useStateValue()

  function FormRow() {
    return (
      <>
        {basket?.map((item) => (
          <Grid key={item.id} xs={12} sm={6} md={4} lg={3}>
            <CheckoutCart product={item} />
          </Grid>
        ))}
      </>
    )
  }

  return (
    <Page title='Products' help={<Typography>title</Typography>}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={8} md={9} container spacing={3}>
            <FormRow />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <Typography align='center' gutterBottom variant='h4'>
              <Total />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Page>
  )
}
