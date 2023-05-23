/**
 * @prettier
 */

import { configureStore } from '@reduxjs/toolkit';

//import userRequestSlice from './user/userRequestSlice';
import userResponseSlice from './user/userResponseSlice';
import formSlice from './form/formSlice';

export const store = configureStore({
  reducer: {
    //userRequest: userRequestSlice,
    user: userResponseSlice,
    form: formSlice,
  },
});
