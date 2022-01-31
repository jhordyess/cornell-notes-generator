import React from "react";
import "./App.css";
import PDF from "./components/PDF";
import { ChromePicker } from "react-color";

const App = () => {
  const [color, setBackground] = React.useState("#000");
  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };
  return (
    <div className="container">
      <h2>Cornell notes generator</h2>
      <div>
        <div className="options">
          <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
        </div>
        <PDF color={color} />
      </div>
      <footer>
        Made with 💪 by{" "}
        <a href="https://jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
      </footer>
    </div>
  );
};

export default App;
