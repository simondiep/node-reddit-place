import React, { Component } from "react";
import "./App.css";
import FooterColorPalette from "./components/FooterColorPalette";
import Grid from "./components/Grid";

class App extends Component {

  constructor(props) {
    super(props);
    this.onColorSelected = this.onColorSelected.bind(this);
    this.state = {
      selectedColor: null,
    }
  }

  onColorSelected(color) {
    this.setState({
      selectedColor: color,
    })
  }

  render() {
    return (
      <div className="App">
        <div>Reddit Place Clone</div>
        <div className="Subtext">Click on a tile to change its color</div>
        <Grid selectedColor={this.state.selectedColor} />
        <FooterColorPalette
          onColorSelected={this.onColorSelected}
          selectedColor={this.state.selectedColor}
        />
      </div>
    );
  }
}

export default App;
