import React, { useCallback, useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from "react-responsive-carousel";
import { BsStarFill } from "react-icons/bs";
import List from "../components/List";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import Discover from "../components/Discover/Discover";
import Movies from "./Movies";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const Home = ({ page, genreforURL, numOfPages, setPage }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const { loading, setLoading } = useGlobalContext();

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchData = useCallback(async () => {
  //     try {
  //       const res = await fetch(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  //       );
  //       const data = await res.json();
  //       setPopularMovies(data.results);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []));

  // const fetchData = async () => {
  //   setLoading(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US`
      );
      setPopularMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page, genreforURL, numOfPages, setPage]);

  //   try {
  //     const res = await fetch(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  //     );
  //     const data = await res.json();
  //     setPopularMovies(data.results);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };
  // fetchData();

  useEffect(() => {
    fetchData();
  }, [page, genreforURL, numOfPages, setPage, fetchData]);

  return (
    <>
      {loading ? (
        <div style={{ height: 300 }}>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
              <Skeleton height={300} duration="2" />
            </p>
          </SkeletonTheme>
        </div>
      ) : (
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          transitionTime={1}
          showStatus={false}
        >
          {popularMovies?.slice(1, 11).map((movie) => {
            const {
              id,
              backdrop_path,
              original_title,
              release_date,
              vote_average,
              overview,
            } = movie;
            return (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`movie/${id}`}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{original_title}</div>
                  <div className="posterImage__runtime">
                    <>{window.screen.width <= 400 ? "" : release_date}</>

                    <div className="posterImage__rating">
                      <> {window.screen.width <= 400 ? "" : vote_average}</>
                      {window.screen.width <= 400 ? "" : <BsStarFill />}
                    </div>
                  </div>
                  <div className="posterImage__description">
                    {window.screen.width <= 620
                      ? ""
                      : overview.slice(0, 80) + "..."}
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      )}

      {/* <Movies /> */}
    </>
  );
};

export default Home;
