import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentHistory: {},
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    savePaymentHistory: (state, { payload }) => {
      state.paymentHistory = payload;
    },
  },
});

const { reducer, actions } = paymentSlice;

export const { savePaymentHistory } = actions;
export default reducer;
