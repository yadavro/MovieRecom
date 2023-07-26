import React, { useEffect, useRef } from "react";
import SearchListMovies from "../components/SearchListMovies";
import { useGlobalContext } from "../Context";
import "./search-movies.css";

const SearchMovies = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchMovie = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search For Your Favorite Movies</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchMovie}
          />
        </div>
      </form>
      <SearchListMovies />
    </section>
  );
};

export default SearchMovies;
