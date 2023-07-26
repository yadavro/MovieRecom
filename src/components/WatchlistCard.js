import React from "react";
import { useDispatch } from "react-redux";
import { BsStarFill } from "react-icons/bs/";
import "./card.css";
import { HiX } from "react-icons/hi";
import { remove } from "../State/Slice/WatchlistSlice";
import { Link } from "react-router-dom";

const WatchlistCard = ({ movieItem }) => {
  const dispatch = useDispatch();
  const { poster_path, original_title, release_date, vote_average, overview } =
    movieItem;

  const handleRemove = (movieItem) => {
    dispatch(remove(movieItem));
  };

  return (
    <div>
      <Link to={`./movie/${movieItem.id}`}>
        <div className="cards">
          <img
            className="cards__img"
            src={`https://image.tmdb.org/t/p/original${
              movieItem ? poster_path : ""
            }`}
          />

          <div className="cards__overlay">
            <div className="card__title">{movieItem ? original_title : ""}</div>

            <div className="card__runtime">
              {movieItem ? release_date : ""}
              <span className="card__rating">
                {movieItem ? vote_average.toFixed(1) : ""}
                <BsStarFill />
              </span>
            </div>
            <div className="card__description">
              {movieItem ? overview.slice(0, 80) + "..." : ""}
            </div>
          </div>
        </div>
      </Link>
      <HiX className="card__remove" onClick={() => handleRemove(movieItem)} />
    </div>
  );
};

export default WatchlistCard;
