import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moviedetails.css";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import {
  BsShare,
  BsFillBookmarkDashFill,
  BsFillBookmarkPlusFill,
  BsBookmarkPlus,
} from "react-icons/bs";
import Loading from "./Loading";
import SimilarMovies from "../components/SimilarMovies";
import SimilarSingle from "../components/SimilarSingle";
import { useGlobalContext } from "../Context";
import HorizontalScroll from "react-horizontal-scrolling";
import { AiOutlinePlayCircle } from "react-icons/ai/";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
// import { Carousel } from "react-responsive-carousel";
import { unavailable, unavailableBackdrop } from "../Config/Config";
import axios from "axios";
import Trailer from "../components/Trailer/Trailer";
import YouTube from "react-youtube";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../State/Slice/WatchlistSlice";
import Movies from "./Movies";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const Moviedetails = () => {
  const [currentMovieDetails, setCurrentMovieDetails] = useState();
  const { id } = useParams();

  const [addWatchlist, setAddWatchlist] = useState(false);
  const [similarMovies, setSimilarMovies] = useState();
  const { openModal, loading, setLoading, openVideo, closeVideo } =
    useGlobalContext();
  const [video, setVideo] = useState();
  const [playing, setPlaying] = useState(true);
  const dispatch = useDispatch();
  const { movieItems } = useSelector((state) => state.watchlist);

  console.log(movieItems);
  const handleAdd = (currentMovieDetails) => {
    setAddWatchlist(!addWatchlist);
    dispatch(add(currentMovieDetails));
  };

  const handleRemove = (currentMovieDetails) => {
    setAddWatchlist(!addWatchlist);
    dispatch(remove(currentMovieDetails));
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     window.scrollTo(0, 0);
  //     try {
  //       const res = await fetch(
  //         `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  //       );
  //       const data = await res.json();
  //       setCurrentMovieDetails(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, [id]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      setAddWatchlist();
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US`
        );
        setCurrentMovieDetails(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getSimilar = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US&page=1`
        );
        const data = await res.json();
        setSimilarMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getSimilar();
  }, [id, movieItems]);

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US`
    );
    setVideo(data.results[0]?.key);
    console.log(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
  }, [id, movieItems]);

  const width = window.screen.width <= 768 ? "350" : "800";
  const height = window.screen.height <= 768 ? "300" : "580";
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="movie">
          <div className="movie__intro">
            {loading ? (
              <img src={unavailableBackdrop} />
            ) : (
              <img
                className="movie__backdrop"
                src={
                  currentMovieDetails && currentMovieDetails.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${currentMovieDetails.backdrop_path}`
                    : unavailableBackdrop
                }
              />
            )}
          </div>

          <div className="movie__detail">
            <div className="movie__detailLeft">
              <div className="movie__posterBox">
                {window.screen.width <= 400 ? (
                  ""
                ) : (
                  <img
                    className="movie__poster"
                    src={
                      currentMovieDetails
                        ? `https://image.tmdb.org/t/p/original${currentMovieDetails.poster_path}`
                        : unavailable
                    }
                  />
                )}
              </div>
            </div>
            <div className="movie__detailRight">
              <div className="movie__detailRightTop">
                <div className="movie__name">
                  {currentMovieDetails
                    ? currentMovieDetails.original_title
                    : ""}
                  <div className="movie__shareandwatch">
                    <BsShare
                      style={{ width: "20px" }}
                      className="movie__share"
                      onClick={openModal}
                    />
                    {/* <BsBookmarkPlus
                      className="movie__unadd"
                      style={{ width: "25px" }}
                      onClick={() => dispatch(addBookmark(currentMovieDetails))}
                    /> */}
                    {!addWatchlist ? (
                      <BsBookmarkPlus
                        className="movie__unadd"
                        style={{ width: "25px" }}
                        onClick={() => handleAdd(currentMovieDetails)}
                      />
                    ) : (
                      <BsFillBookmarkPlusFill
                        className="movie__add"
                        style={{ width: "25px" }}
                        onClick={() => handleRemove(currentMovieDetails)}
                      />
                    )}
                  </div>
                </div>

                <div className="movie__tagline">
                  {currentMovieDetails ? currentMovieDetails.tagline : ""}
                </div>
                <div className="movie__ratting">
                  {currentMovieDetails
                    ? currentMovieDetails.vote_average.toFixed(1)
                    : ""}
                  <FaRegStar />

                  <div className="movie__voteCount">
                    {currentMovieDetails
                      ? +currentMovieDetails.vote_count + " " + "votes"
                      : ""}{" "}
                    <FaRegHeart />
                  </div>
                </div>
                <div className="movie__runtime">
                  {currentMovieDetails
                    ? "(" + currentMovieDetails.runtime + ") mins"
                    : ""}{" "}
                  <IoMdTime />
                </div>
                <div className="movie__releaseDate">
                  {currentMovieDetails ? currentMovieDetails.release_date : ""}{" "}
                  <MdOutlineDateRange />
                </div>
                <div className="movie__genres">
                  {currentMovieDetails && currentMovieDetails.genres
                    ? currentMovieDetails.genres.map((genre) => {
                        return (
                          <>
                            <span className="movie__genre" id={genre.id}>
                              {genre.name}
                            </span>
                          </>
                        );
                      })
                    : ""}
                </div>
              </div>
              <div className="movie__datailRightBottom">
                <div className="synopsisText">Synopsis</div>

                {window.screen.width <= 480 ? (
                  <div>
                    {currentMovieDetails
                      ? currentMovieDetails.overview.slice(0, 450) + "..."
                      : ""}
                  </div>
                ) : (
                  <div>
                    {currentMovieDetails ? currentMovieDetails.overview : ""}
                  </div>
                )}
                {/* <div>
                  {currentMovieDetails && window.screen.width <= 480
                    ? currentMovieDetails.overview.slice(0, 450) + "..."
                    : currentMovieDetails.overview}
                </div> */}
              </div>
            </div>
          </div>
          <div className="youtube">
            <div className="trailer">Trailer</div>
            {video ? (
              <YouTube
                videoId={video}
                opts={opts}
                allowsFullscreenVideo={true}
              />
            ) : (
              <img src={unavailableBackdrop} />
            )}
          </div>

          <div className="similar__list">
            {similarMovies?.length !== 0 ? (
              <h2 className="similar__name">
                {"similar movies".toUpperCase()}
              </h2>
            ) : (
              <h2 className="similar__name">
                {"no related movies".toUpperCase()}
              </h2>
            )}
            <div className="similar__single">
              {/* <HorizontalScroll>
                {similarMovies?.slice(0, 6).map((movie) => (
                  <SimilarSingle movie={movie} />
                ))}
              </HorizontalScroll> */}
              <Slider {...settings}>
                {similarMovies?.slice(0, 11).map((movie) => (
                  <SimilarSingle movie={movie} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Moviedetails;
