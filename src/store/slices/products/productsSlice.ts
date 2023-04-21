import Product from '@/modules/home/models/Product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IProducts {
  page: number;
  products: Product[];
  isLoading: boolean;
}

const initialState: IProducts = {
  page: 0,
  products: [],
  isLoading: false,
};

type FetchProductsError = {
  message: string;
};

export const getProducts = createAsyncThunk<Product[], number, { rejectValue: FetchProductsError }>(
  'products/fetch',
  async (limit: number, thunkAPI) => {
    const response = await fetch('http://localhost:3001/api/products', {
      method: 'GET',
    });
    const data = response.json();
    // Check if status is not okay:
    if (response.status !== 200) {
      // Return the error message:
      return thunkAPI.rejectWithValue({
        message: 'Failed to fetch products.',
      });
    }
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, actions) => {
      console.log(actions.payload.products);
      state.products = actions.payload.products;
      state.page = actions.payload.page;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
//actions creators
export const { startLoadingProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
