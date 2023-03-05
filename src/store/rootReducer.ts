import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slices/products/productsSlice';
import basketReducer from './slices/basket/basketSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
