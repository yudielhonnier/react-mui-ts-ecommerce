import { HttpPostData } from '@/common/http/HttpClient';
import Product from '@/modules/home/models/Product';
import { createAsyncThunk, createSlice, AsyncThunk } from '@reduxjs/toolkit';

interface ICheckOut {
  message: string;
  shipingData: {};
}
interface IPostData {
  id: string;
  amount: number;
  limit: number;
}

const initialState: ICheckOut = {
  message: '',
  shipingData: {},
};

export const postCheckout = createAsyncThunk<string, IPostData, { rejectValue: PostCheckoutError }>(
  'checkout/postCheckout',
  async ({ limit, id, amount }: IPostData, thunkAPI) => {
    console.log('postCheckoutinggggg ', id);
    console.log('postCheckoutinggggg ', amount);

    const response = await fetch('http://localhost:3001/api/checkout', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id, amount: amount }),
    });
    const data = response.json();
    // Check if status is not okay:
    if (response.status !== 200) {
      // Return the error message:
      return thunkAPI.rejectWithValue({
        message: 'Failed to psot payment.',
      });
    }
    return data;
  }
);
type PostCheckoutError = {
  message: string;
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialState,
  reducers: {
    setMessage: (state, actions) => {
      console.log(actions.payload.message);
      state.message = actions.payload.message;
    },

    setShippingData: (state, actions) => {
      console.log(actions.payload);
      state.shipingData = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postCheckout.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});
//actions creators
export const { setMessage, setShippingData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
