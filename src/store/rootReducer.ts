import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slices/products/productsSlice';
import basketReducer from './slices/basket/basketSlice';
import checkoutReducer from './slices/checkout/checkoutSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  checkout: checkoutReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
