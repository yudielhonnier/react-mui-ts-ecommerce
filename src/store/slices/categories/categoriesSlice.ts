import categoryServices from '@/firebase/services/categoryServices';
import { Category } from '@/types/models/Category';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ICategories {
  page: number;
  categories: Category[];
  isLoading: boolean;
}

const initialState: ICategories = {
  page: 0,
  categories: [],
  isLoading: false,
};

type FetchCategoriesError = {
  message: string;
};

export const getCategories = createAsyncThunk<
  Category[],
  number,
  { rejectValue: FetchCategoriesError }
>('categories/fetch-firebase', async (limit: number, thunkAPI) => {
  try {
    console.log(' fetching categories...');
    const data = await categoryServices.getAll();
    return data.slice(0, limit);
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: 'Failed to fetch Categories.',
    });
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    startLoadingCategories: (state) => {
      state.isLoading = true;
    },
    setCategories: (state, actions) => {
      console.log(actions.payload.categories);
      state.categories = actions.payload.categories;
      state.page = actions.payload.page;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
//actions creators
export const { startLoadingCategories, setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
