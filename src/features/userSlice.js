import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 user:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      console.log(payload, 'payload')
        state.user = payload;
      },
  },
});
export const {
    setUser
} = userSlice.actions;
export default userSlice.reducer;