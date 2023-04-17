/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userResponseSlice = createSlice({
  name: 'userResponse',
  initialState,
  reducers: {
    setAuthData: (state, action) => (state = { ...action.payload }),
  },
});

export const { setAuthData } = userResponseSlice.actions;
export default userResponseSlice.reducer;
