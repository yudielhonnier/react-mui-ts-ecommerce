import Product from '@/modules/home/models/Product';
import { createSlice } from '@reduxjs/toolkit';

interface IBasket {
  page: number;
  basket: Product[];
}

const initialState: IBasket = {
  page: 0,
  basket: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemInCart = state.basket.find((prod) => prod.id === action.payload.id);
      itemInCart ? itemInCart.quantity++ : state.basket.push({ ...action.payload, quantity: 1 });
    },
    removeFromBasket: (state, action) => {
      const newBasket = state.basket.filter((prod) => prod.id !== action.payload.id);
      state.basket = newBasket;
    },
    decQtyItem: (state, action) => {
      const itemInCart = state.basket.find((prod) => prod.id === action.payload.id);
      itemInCart && itemInCart.quantity > 1 ? itemInCart.quantity-- : null;
    },
    clearBasket: (state, action) => {
      state.basket = [];
    },
  },
});
//action creators
export const { addToBasket, removeFromBasket, decQtyItem, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
