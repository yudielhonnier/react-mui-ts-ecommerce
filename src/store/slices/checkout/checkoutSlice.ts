// import Product from '@/modules/home/models/Product';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// interface ICheckOut {
//   message: string;
// }

// const initialState: ICheckOut = {
//   message: '',
// };

// export const getCheckout = createAsyncThunk<ICheckOut, number, { rejectValue: FetchProductsError }>(
//   'products/fetch',
//   async (limit: number, thunkAPI) => {
//     const response = await fetch('http://localhost:3001/api/products', {
//       method: 'GET',
//     });
//     const data = response.json();
//     // Check if status is not okay:
//     if (response.status !== 200) {
//       // Return the error message:
//       return thunkAPI.rejectWithValue({
//         message: 'Failed to fetch todos.',
//       });
//     }
//     return data;
//   }
// );
// type FetchProductsError = {
//   message: string;
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: initialState,
//   reducers: {

//   },
//   extraReducers: (builder) => {
//     builder.addCase(getCheckout.fulfilled, (state, action) => {
//     });
//   },
// });
// //actions creators
// export const {  } = productsSlice.actions;
// export default productsSlice.reducer;
