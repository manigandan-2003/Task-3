import React, { Component } from "react";
import "./App.css";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "teal",
  "brown",
  "gray",
  "#FF5733",
  "#FFD700",
  "#87CEEB",
  "#800080",
  "#008000",
  "#FF00FF",
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleColorSelection = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false,
    });
  };

  render() {
    const { isOpen, selectedColor } = this.state;

    const appStyle = {
      backgroundColor: selectedColor,
    };

    return (
      <div className="App" style={appStyle}>
        <div className="color-picker">
          <button onClick={this.toggleColorList}>
            {selectedColor ? `Selected: ${selectedColor}` : "Pick a color"}
          </button>
          {isOpen && (
            <div className="color-list">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color-square"
                  style={{ background: color }}
                  onClick={() => this.handleColorSelection(color)}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
