import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimilarSingle from "./SimilarSingle";
import "./similar-movie.css";
import { BsStarFill } from "react-icons/bs/";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from "react-responsive-carousel";

const SimilarMovies = () => {
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US&page=1`
      );
      const data = await res.json();
      console.log(data.results);
      setSimilarMovies(data.results);
    };
    getData();
  }, []);

  return (
    <div className="similar__list">
      {similarMovies ? (
        <h2 className="similar__name">{"similar movies".toUpperCase()}</h2>
      ) : (
        <h2 className="similar__name">{"no related movies".toUpperCase()}</h2>
      )}

      {similarMovies.slice(1, 6).map((movie, index) => {
        <SimilarSingle key={index} movie={movie} />;
      })}
    </div>
  );
};

export default SimilarMovies;
