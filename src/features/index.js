/**
 * @prettier
 */

import { configureStore } from '@reduxjs/toolkit';

//import userRequestSlice from './user/userRequestSlice';
import userResponseSlice from './user/userResponseSlice';
import formSlice from './form/formSlice';
import setInNewUserData from './user/isNewUserSlice';

export const store = configureStore({
  reducer: {
    //userRequest: userRequestSlice,
    user: userResponseSlice,
    form: formSlice,
    isNewUser: setInNewUserData,
  },
});
