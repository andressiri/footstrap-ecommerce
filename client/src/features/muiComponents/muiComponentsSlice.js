import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDrawer: false
};

export const muiComponentsSlice = createSlice({
  name: 'muiComponents',
  initialState,
  reducers: {
    resetMUIComponents: () => initialState,
    changeDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    }
  }
});

export const { resetMUIComponents, changeDrawer } = muiComponentsSlice.actions;
export default muiComponentsSlice.reducer;
