import React, { Component, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatRoom from "./components/ChatRoom/ChatRoom";

const App = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event);
    console.log(name);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home nameChange={handleNameChange} name={name} />}
        />
        <Route exact path="/:roomId" element={<ChatRoom name={name} />} />
      </Routes>
    </Router>
  );
};

export default App;
