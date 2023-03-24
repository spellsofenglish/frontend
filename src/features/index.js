/**
 * @prettier
 */

import { configureStore } from '@reduxjs/toolkit';

import userRequestSlice from './user/userRequestSlice';
import userResponseSlice from './user/userResponseSlice';

export const store = configureStore({
  reducer: {
    userRequest: userRequestSlice,
    userResponse: userResponseSlice,
  },
});
