import { configureStore } from "@reduxjs/toolkit";
import WatchlistReducer from "./Slice/WatchlistSlice";

export const Store = configureStore({
  reducer: {
    watchlist: WatchlistReducer,
  },
});
