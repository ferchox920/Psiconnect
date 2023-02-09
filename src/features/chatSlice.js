import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: null,
  allChats: null,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setAllChats(state, { payload }) {
      state.allChats = payload;
    },

    setChat(state, { payload }) {
      state.chat = payload;
    },
  },
});
export const { setChat, setAllChats } = chatSlice.actions;
export default chatSlice.reducer;
