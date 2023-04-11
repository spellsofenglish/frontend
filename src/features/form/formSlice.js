/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

const stepSlice = createSlice({
  name: 'form',
  initialState: {
    step: 'start',
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = stepSlice.actions;
export default stepSlice.reducer;
