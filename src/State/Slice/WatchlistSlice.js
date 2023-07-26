import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const items = localStorage.getItem("movieItems")
  ? JSON.parse(localStorage.getItem("movieItems"))
  : [];

const amount = localStorage.getItem("amount")
  ? JSON.parse(localStorage.getItem("amount"))
  : 0;

const initialState = {
  movieItems: items,
  amount: amount,
};

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // add: (state, action) => {
    //   state.amount++;
    //   const movieItem = state.movieItems.find(
    //     (movieItem) => movieItem.id === action.payload.id
    //   );
    //   movieItem
    //     ? (movieItem.amount = movieItem.amount + 1)
    //     : state.movieItems.push({ ...action.payload, amount: 1 });
    //   toast.success("added to watchlist", { position: "bottom-left" });
    // },
    // // add: (state, action) => {
    // //   const movieItem = state.movieItems.findIndex(
    // //     (movieItem) => movieItem.id === action.payload.id
    // //   );

    // //   if (movieItem >= 1) {
    // //     state.movieItems[movieItem].amount = 1;
    // //   } else {
    // //     const tempMovie = { ...action.payload, amount: 1 };
    // //     state.movieItems.push(tempMovie);
    // //     toast.success("added to watchlist", { position: "bottom-left" });
    // //   }
    // },
    add: (state, action) => {
      state.amount++;
      state.movieItems.find(
        (currentMovieDetails) => currentMovieDetails.id === action.payload.id
      );
      // movieItem
      //   ? (movieItem.amount = movieItem.amount + 1)
      //   : state.movieItems.push({ ...action.payload, amount: 1 });

      state.movieItems.push({ ...action.payload, amount: 1 });
      // state.amount += movieItem.amount;
      toast.success("added to watchlist", {
        position: "top-left",
        zIndex: 999,
      });

      localStorage.setItem(
        "movieItems",
        JSON.stringify(
          state.movieItems.map((currentMovieDetails) => currentMovieDetails)
        )
      );

      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
    remove: (state, action) => {
      state.movieItems.map((currentMovieDetails) => {
        if (currentMovieDetails.id === action.payload.id) {
          state.movieItems = state.movieItems.filter(
            (item) => item.id !== currentMovieDetails.id
          );
          state.amount -= currentMovieDetails.amount;

          toast.warning("removed from watchlist", {
            position: "top-left",
            zIndex: 999,
          });
        }
        localStorage.setItem(
          "movieItems",
          JSON.stringify(
            state.movieItems.map((currentMovieDetails) => currentMovieDetails)
          )
        );

        localStorage.setItem("amount", JSON.stringify(state.amount));
      });
    },

    clear: (state) => {
      state.movieItems = [];
      state.amount = 0;

      toast.warning("cleared all watchlist", {
        position: "top-left",
        zIndex: 999,
      });

      localStorage.setItem(
        "movieItems",
        JSON.stringify(
          state.movieItems.map((currentMovieDetails) => currentMovieDetails)
        )
      );

      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
  },
});

export const { add, remove, clear } = WatchlistSlice.actions;
export default WatchlistSlice.reducer;
