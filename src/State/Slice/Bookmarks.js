import { createSlice } from "@reduxjs/toolkit";

const BookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      state.find((bookmark) => bookmark.id === action.payload.id);
      state.push({ ...action.payload });
    },
  },
});

export const { addBookmark } = BookmarksSlice.actions;
export default BookmarksSlice.reducer;
