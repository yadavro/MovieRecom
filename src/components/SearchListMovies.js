import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "../pages/Loading";
import SearchCard from "../components/SearchCard";
import "./search-list-movies.css";

const SearchListMovies = () => {
  const { loading, movies } = useGlobalContext();

  return loading ? (
    <Loading />
  ) : (
    <section className="section">
      <h2 className="section-title">{"your search results".toUpperCase()}</h2>
      <div className="section-center">
        {movies?.map((movie) => {
          return <SearchCard key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default SearchListMovies;
