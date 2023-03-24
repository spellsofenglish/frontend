/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  check: true,
};

const userResponseSlice = createSlice({
  name: 'userResponse',
  initialState,
  reducers: {},
});

export const {} = userResponseSlice.actions;
export default userResponseSlice.reducer;
