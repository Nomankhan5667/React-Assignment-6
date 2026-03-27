import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const randomColor = () => {
    const colors = ["red", "blue", "green", "purple", "orange", "pink"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setColor(random);
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h2>Current Color: {color}</h2>

      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("white")}>Reset</button>

      <br />
      <br />

      {/* Challenge Task */}
      <button onClick={randomColor}>Random Color</button>
    </div>
  );
}

export default ColorChanger;
