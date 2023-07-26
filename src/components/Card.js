import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs/";
import "./card.css";

const Card = ({ movie }) => {
  const [isLoading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [type]);

  const screen = window.screen.width;
  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
              <Skeleton height={300} duration="2" />
            </p>
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`./movie/${movie.id}`}
        >
          <div className="cards">
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />

            <div className="cards__overlay">
              <div className="card__title">
                {movie ? movie.original_title : ""}
              </div>

              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <BsStarFill />
                </span>
              </div>
              <div className="card__description">
                {movie ? movie.overview.slice(0, 80) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
