import React, { useEffect } from "react";
import { unavailable } from "../../Config/Config";
import Loading from "../../pages/Loading";
import "../../components/card.css";
import { useGlobalContext } from "../../Context";
import { BsStarFill } from "react-icons/bs/";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Discover = ({ id, poster, title, date, vote, overview, page }) => {
  const { loading, setLoading } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [page]);

  return (
    <>
      {loading ? (
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
          to={`./movie/${id}`}
        >
          <div className="cards">
            <img
              className="cards__img"
              src={
                poster
                  ? `https://image.tmdb.org/t/p/original${poster}`
                  : unavailable
              }
            />

            <div className="cards__overlay">
              <div className="card__title">{title}</div>

              <div className="card__runtime">
                {date ? date : ""}
                <span className="card__rating">
                  {vote}
                  <BsStarFill />
                </span>
              </div>
              <div className="card__description">
                {overview ? overview.slice(0, 80) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Discover;
