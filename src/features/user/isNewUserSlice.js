/**
 * @prettier
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isNewUserSlice = createSlice({
  name: 'userResponse',
  initialState,
  reducers: {
    setInNewUserData: (state, action) => (state = action.payload),
  },
});

export const { setInNewUserData } = isNewUserSlice.actions;
export default isNewUserSlice.reducer;
