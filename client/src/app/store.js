import { configureStore } from '@reduxjs/toolkit';
import muiComponentsReducer from '../features/muiComponents/muiComponentsSlice';

export const store = configureStore({
  reducer: {
    muiComponents: muiComponentsReducer
  }
});
