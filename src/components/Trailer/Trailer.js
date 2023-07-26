import React, { useState, useEffect } from "react";
import "../modal.css";
import { useGlobalContext } from "../../Context";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const Trailer = () => {
  const { isVideoOpen, closeVideo } = useGlobalContext();
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [playing, setPlaying] = useState(false);

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
  }, [id]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      // controls: 0,
      // cc_load_policy: 0,
      // fs: 0,
      // iv_load_policy: 0,
      // modestbranding: 0,
      // rel: 0,
      // showinfo: 0,
    },
  };

  return (
    <div
      className={`${
        isVideoOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <YouTube videoId={video} opts={opts} />
        <button className="close-modal-btn" onClick={closeVideo}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Trailer;
