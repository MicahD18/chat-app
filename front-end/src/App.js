import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatRoom from "./components/ChatRoom/ChatRoom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:roomId" component={<ChatRoom />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
