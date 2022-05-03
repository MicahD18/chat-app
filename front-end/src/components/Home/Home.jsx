import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="main-container">
      <div></div>
      <div className="home-container">
        <input
          type="text"
          placeholder="Room name"
          value={roomName}
          onChange={handleRoomNameChange}
          className="text-input-field"
        ></input>
        <Link to={`${roomName}`} className="enter-room-button">
          Create Room
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
