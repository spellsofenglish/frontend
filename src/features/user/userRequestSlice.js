import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: 0,
  nickName: '',
};

const userRequestSlice = createSlice({
  name: 'userRequest',
  initialState,
  reducers: {},
});

export const {} = userRequestSlice.actions;
export default userRequestSlice.reducer;
