import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDrawer: false,
  openDeleteAccount: false,
  openDelAccConfirm: false
};

export const muiComponentsSlice = createSlice({
  name: 'muiComponents',
  initialState,
  reducers: {
    resetMUIComponents: () => initialState,
    resetMUIDialogs: (state) => {
      state.openDeleteAccount = false;
      state.openDelAccConfirm = false;
    },
    changeDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    },
    changeDeleteAccount: (state) => {
      state.openDeleteAccount = !state.openDeleteAccount;
    },
    changeDelAccConfirm: (state) => {
      state.openDelAccConfirm = !state.openDelAccConfirm;
    }
  }
});

export const {
  resetMUIComponents,
  resetMUIDialogs,
  changeDrawer,
  changeDeleteAccount,
  changeDelAccConfirm
} = muiComponentsSlice.actions;
export default muiComponentsSlice.reducer;
