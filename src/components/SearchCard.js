import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { BsStarFill } from "react-icons/bs/";
import Loading from "../pages/Loading";
import { useGlobalContext } from "../Context";
import { unavailable } from "../Config/Config";

const SearchCard = ({
  id,
  poster_path,
  original_title,
  release_date,
  vote_average,
  overview,
}) => {
  const { loading } = useGlobalContext();

  return loading ? (
    <Loading />
  ) : (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      to={`./movie/${id}`}
    >
      <div className="cards">
        <img
          className="cards__img"
          // src={`https://image.tmdb.org/t/p/original${
          //   poster_path ? poster_path : unavailable
          // }`}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : unavailable
          }
        />

        <div className="cards__overlay">
          <div className="card__title">{original_title}</div>

          <div className="card__runtime">
            {release_date}
            <span className="card__rating">
              {vote_average}
              <BsStarFill />
            </span>
          </div>
          <div className="card__description">
            {overview.slice(0, 80) + "..."}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
