import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = ({nameChange, name}) => {

  return (
    <div className="main-container">
      <div></div>
      <div className="home-container">
        <input
          type="text"
          placeholder="Room name"
          value={name}
          onChange={(e) => nameChange(e.target.value)}
          className="text-input-field"
        ></input>
        <Link to={`${name}`} className="enter-room-button">
          Create Room
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
