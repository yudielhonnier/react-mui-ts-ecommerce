// import { setProducts, startLoadingProducts } from './productsSlice';
// import axios from 'axios';
// import { AppDispatch } from '@/store/store';
// import { AppState } from '@/context/reducer';

// const fakeUrl = 'http://localhost:3001/api/products';

// export const getProducts = (page = 0) => {
//   return async (dispatch: AppDispatch, getState: AppState) => {
//     dispatch(startLoadingProducts());

//     // TODO: realizar peticion  http
//     const { data } = await axios.get(fakeUrl);
//     dispatch(setProducts({ Products: data.results, page: page + 1 }));
//   };
// };
