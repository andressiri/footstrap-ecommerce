import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helpers/axiosInstance';
import getErrorMessage from '../../helpers/getErrorMessage';

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  productsShown: 0,
  productStock: {},
  productStockBrand: {}
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

// Get Product with stock
export const getProductWithStock = createAsyncThunk(
  'products/getProductWithStock',
  async (id, thunkAPI) => {
    try {
      return await axiosInstance(`/products/stock/${id}`, {}, 'GET');
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Brand
export const getBrand = createAsyncThunk(
  'products/getBrand',
  async (id, thunkAPI) => {
    try {
      return await axiosInstance(`/brands/${id}`, {}, 'GET');
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
    },
    resetProductStock: (state) => {
      state.productStock = {};
      state.productStockBrand = {};
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
      })
      // Get product with stock
      .addCase(getProductWithStock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductWithStock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productStock = action.payload;
      })
      .addCase(getProductWithStock.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get product with stock
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productStockBrand = action.payload;
      })
      .addCase(getBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const {
  resetProducts,
  resetProductsReq,
  refreshProductsShown,
  resetProductStock
} = productsSlice.actions;
export default productsSlice.reducer;
