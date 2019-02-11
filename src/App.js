import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Reddit Place Clone</div>
        <div className="Subtext">Click on a tile to change its color</div>
        <Grid />
      </div>
    );
  }
}

export default App;
