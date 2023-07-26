import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./list.css";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import Loading from "../pages/Loading";

const List = () => {
  const [movieLists, setMoviesLists] = useState([]);
  const { type } = useParams();
  const { openModal } = useGlobalContext();

  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "now_playing"
        }?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US`
      );
      const data = await res.json();
      setMoviesLists(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <div className="list__head">
        <h2 className="list__title">
          {(type ? type : "discover").toUpperCase()}
        </h2>
      </div>
      <div className="list__cards">
        {movieLists.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default List;
