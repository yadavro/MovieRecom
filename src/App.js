import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Moviedetails from "./pages/Moviedetails";
import List from "./components/List";
import Header from "./components/Header";
import SearchMovies from "./pages/SearchMovies";
import Footer from "./components/Footer";
import Genres_ from "./pages/Genres_";
import Watchlist from "./pages/Watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Movies from "./pages/Movies";

function App() {
  const { amount, movieItems } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {}, [movieItems]);

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Movies />}></Route>

          <Route path="movie/:id" element={<Moviedetails />}></Route>

          <Route path="watchlist" element={<Watchlist />}></Route>
          <Route path="watchlist/movie/:id" element={<Moviedetails />}></Route>
          <Route
            path="watchlist/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="watchlist/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>

          <Route
            path="movies/:type/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route path="movie/:id/movie/:id" element={<Moviedetails />}></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route path="movies/:type" element={<List />}></Route>
          {/* <Route path="movies/:type/movies/genres" element={<List />}></Route> */}
          <Route path="movies/search" element={<SearchMovies />}></Route>

          <Route
            path="/*"
            element={
              <h1 style={{ fontSize: 50 }}>Sorry something went wrong...</h1>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
