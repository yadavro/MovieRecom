import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import "./side-bar.css";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineFire, AiOutlineStar } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { MdOutlineFiberNew } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { amount } = useSelector((state) => state.watchlist);
  const { isSidebarOpen, closeSidebar, setIsSidebarOpen, openModal } =
    useGlobalContext();

  let sidebarRef = useRef();

  // console.log(movieItems);
  useEffect(() => {
    let handle = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });

  return (
    <aside
      className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      ref={sidebarRef}
    >
      <div className="sidebar-header">
        <div className="header__logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}> MOVIE </span>
            <span style={{ color: "red" }}>RECOMM</span>{" "}
          </Link>
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="links">
        <Link to="./" className="links__icon">
          <AiOutlineHome className="header__icon" />
          <p>{"home".toUpperCase()}</p>
        </Link>
        {/* <div onClick={openModal} className="links__icon">
          <AiOutlineUser className="header__icon" />
          <p>{"log in".toUpperCase()}</p>
        </div> */}

        <Link to="./movies/search" className="links__icon">
          <AiOutlineSearch className="header__icon" />
          <p>{"search".toUpperCase()}</p>
        </Link>

        <Link to="watchlist" className="links__icon">
          <BsBookmark className="header__icon" />
          <p>
            {"watchlist".toUpperCase()}({amount})
          </p>
        </Link>

        <Link
          to="movies/popular"
          style={{ textDecoration: "none" }}
          className="links__icon"
        >
          <AiOutlineFire className="header__icon" />
          <p>{"Popular".toLocaleUpperCase()}</p>
        </Link>

        <Link
          to="movies/top_rated"
          style={{ textDecoration: "none" }}
          className="links__icon"
        >
          <AiOutlineStar className="header__icon" />
          <p>{"top rated".toLocaleUpperCase()}</p>
        </Link>

        <Link
          to="movies/upcoming"
          style={{ textDecoration: "none" }}
          className="links__icon"
        >
          <MdOutlineFiberNew className="header__icon" />
          <p>{"upcoming".toLocaleUpperCase()}</p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
