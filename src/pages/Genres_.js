import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Genres_ = () => {
  const apiKey = "a5e2c43d79f3acc3fade9ef3449c3c6b";
  const url = "https://api.themoviedb.org/3";
  const nowPlayingUrl = `${url}/movie/now_playing`;
  const topratedUrl = `${url}/movie/top_rated`;
  const movieUrl = `${url}/movie`;
  const genreUrl = `${url}/genre/movie/list`;
  const moviesUrl = `${url}/discover/movie`;
  const personUrl = `${url}/trending/person/week`;

  useParams();

  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const fetchMovieByGenre = async (genre_id) => {
    try {
      const { data } = await axios.get(moviesUrl, {
        params: {
          api_key: apiKey,
          language: "en_US",
          page: 1,
          with_genres: genre_id,
        },
      });
      const posterUrl = "https://image.tmdb.org/t/p/original/";
      const modifiedData = data["results"].map((m) => ({
        id: m["id"],
        backPoster: posterUrl + m["backdrop_path"],
        popularity: m["popularith"],
        title: m["title"],
        poster: posterUrl + m["poster_path"],
        overview: m["overview"],
        rating: m["vote_average"],
      }));

      return modifiedData;
    } catch (error) {}
  };

  useEffect(() => {
    const fetchAPI = async () => {
      // setNowPlaying(await fetchMovies());
      // setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      // setPersons(await fetchPersons());
      // setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };
  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 500, width: "100%" }} key={index}>
        <div style={{ width: "100px", backgroundColor: "red" }}>
          <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
        </div>
        <div>
          <i style={{ fontSize: 95, color: "#f4c10f" }}></i>
        </div>
        <div style={{ textAlign: "center", fontSize: 35 }}>{item.title}</div>
      </div>
    );
  });
  return (
    <>
      {genres.map((item, index) => {
        return (
          <li className="list-inline-item" key={index}>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => {
                handleGenreClick(item.id);
              }}
            >
              {item.name}
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Genres_;
