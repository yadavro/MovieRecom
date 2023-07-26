import React, { useState, useEffect } from "react";
import "./modal.css";
import { FaTimes } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { useGlobalContext } from "../Context";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import axios from "axios";
import Ratio from "react-bootstrap/Ratio";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <div className="modal__feature">
          <CgDanger className="unavailable__icon" />
          <h3>sorry... this feature is not available yet</h3>
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
