import { configureStore } from '@reduxjs/toolkit';
import userRequestSlice from './features/user/userRequestSlice';
import userResponseSlice from './features/user/userResponseSlice';

export const store = configureStore({
  reducer: {
    userRequest: userRequestSlice,
    userResponse: userResponseSlice,
  },
});
