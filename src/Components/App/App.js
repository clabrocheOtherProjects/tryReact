import React, { Component } from "react";
import "./App.css";
import MathRandom from "../MathRandom";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
