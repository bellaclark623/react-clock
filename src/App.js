import React, { Component } from "react";
import "./App.css";
import Clock from "./components/clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
