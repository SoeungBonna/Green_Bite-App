import "./HeroVideo.css";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import React from "react";

export const HeroVideo = () => {
  const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          url="https://youtu.be/OZzoAw9QHXY?si=nHdk17Gm8q3kqFWr"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>

      {/* <div className="hero-text">
        <h1>Sneak into Extraordinary</h1>
        <h2>
          Unleash Your Fashion Journey with TheWalk's Trendsetting Shoe
          Collection!
        </h2>
      </div> */}

      <button
        onClick={() => Navigate("product-listing")}
        className="shop-now-btn"
      >
        Shop Now
      </button>
    </div>
  );
};
