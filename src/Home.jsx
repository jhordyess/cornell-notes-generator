import React from "react";
import "@styles/Home.css";
import PDF from "@components/Cornell";
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
        <a href="https://www.jhordyess.com" target="_blank">
          Jhordyess
        </a>
        <br />
        <a
          href="https://github.com/jhordyess/cornell-notes-generator"
          target="_blank"
        >
          👉 View on GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
