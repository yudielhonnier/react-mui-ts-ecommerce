import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slices/products/productsSlice';
import basketReducer from './slices/basket/basketSlice';
import checkoutReducer from './slices/checkout/checkoutSlice';
import categoriesReducer from './slices/categories/categoriesSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  checkout: checkoutReducer,
  categories: categoriesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
