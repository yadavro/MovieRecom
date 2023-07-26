import React, { useEffect, useState } from "react";
import ListGenres from "../components/ListGenres";

const Genres = () => {
  const [genres, setGenres] = useState();

  const handleGenres = (genre) => {};
  useEffect(() => {
    const getGenres = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US`
        );
        const data = await res.json();
        setGenres(data.genres);
        console.log(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  return (
    <>
      {genres?.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleGenres(item.id);
            }}
          >
            {item.name}
          </button>
        );
      })}
      <ListGenres />
    </>
  );
};

export default Genres;
