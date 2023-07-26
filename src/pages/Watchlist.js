import React, { useEffect } from "react";
import { remove, clear } from "../State/Slice/WatchlistSlice";
import { useDispatch, useSelector } from "react-redux";
import "./watchlist.css";
import { BsStarFill } from "react-icons/bs/";
import WatchlistCard from "../components/WatchlistCard";
import { HiX } from "react-icons/hi";

import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const dispatch = useDispatch();
  const { amount, movieItems } = useSelector((state) => state.watchlist);

  // const { poster_path, original_title, release_date, vote_average, overview } =
  //   movieItem;
  // console.log(movieItems);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieItems]);

  return (
    <div className="section">
      <div className="watchlist_amount">Watchlist bag ({amount})</div>
      <div className="watchlist_bag">
        {movieItems.length === 0 ? (
          <h1>Your Watchlist Is Empty</h1>
        ) : (
          <>
            {movieItems?.map((currentMovieDetails) => {
              return (
                <WatchlistCard
                  key={currentMovieDetails.id}
                  movieItem={currentMovieDetails}
                />

                // <>
                //   <div className="cards">
                //     <img
                //       className="cards__img"
                //       src={`https://image.tmdb.org/t/p/original${poster_path}`}
                //     />

                //     <div className="cards__overlay">
                //       <div className="card__title">
                //         {movieItem ? original_title : ""}
                //       </div>

                //       <div className="card__runtime">
                //         {movieItem ? release_date : ""}
                //         <span className="card__rating">
                //           {movieItem ? vote_average : ""}
                //           <BsStarFill />
                //         </span>
                //       </div>
                //       <div className="card__description">
                //         {movieItem ? overview.slice(0, 80) + "..." : ""}
                //       </div>
                //     </div>
                //   </div>
                //   <HiX
                //     className="card__remove"
                //     onClick={() => dispatch(remove(movieItem))}
                //   />
                // </>
              );
            })}
          </>
        )}
      </div>
      {movieItems.length >= 2 ? (
        <div className="watchlist_clear" onClick={() => dispatch(clear())}>
          <HiTrash className="watchlist_icon" />
          <p className="watchlist_text">clear all</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Watchlist;
