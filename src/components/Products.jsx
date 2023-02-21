import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Product from "./Product";

import {products} from "../products-data";

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1,margin:'auto' }}>
      <Grid container spacing={3}>
        {
        products.map(product => (
          <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))
        }

      </Grid>
    </Box>
  );
}
