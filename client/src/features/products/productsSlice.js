import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helpers/axiosInstance';
import getErrorMessage from '../../helpers/getErrorMessage';

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  productsShown: 0
};

// Get Products
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (thunkAPI) => {
    try {
      return await axiosInstance('/products', {}, 'GET');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts: () => initialState,
    resetProductsReq: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    refreshProductsShown: (state, action) => {
      state.productsShown = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    // Get products
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const {
  resetProducts,
  resetProductsReq,
  refreshProductsShown
} = productsSlice.actions;
export default productsSlice.reducer;
