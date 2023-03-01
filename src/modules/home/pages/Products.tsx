import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { IItem } from "@/context/reducer.types";

import CardProduct from "../components/CardProduct";

import Page from "@/common/layout/Page";

import { products } from "@/data/products-data.json";

export default function Products() {
  return (
    <Page title={"Products"} help={<Typography>'title'</Typography>}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {products.map((product: IItem) => (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
              <CardProduct product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
}
