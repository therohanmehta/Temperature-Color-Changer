import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [temp, setTemp] = useState(0);
  const [EnteredTemp, setEnteredTemp] = useState();

  let color = "rgb(17, 111, 205)";
  if (temp >= 20 && temp <= 30) {
    color = "yellow";
  } else if (temp > 30 && temp <= 50) {
    color = "orange";
  } else if (temp > 50) {
    color = "red";
  }

  return (
    <div className="mainBox">
      <div className="display" style={{ backgroundColor: color }}>
        <h1>{temp}&#176;C</h1>
      </div>
      <div>
        <input onChange={(e) => setEnteredTemp(e.target.value)} type="number" />{" "}
        <button className="btn" onClick={() => setTemp(EnteredTemp)}>
          Add
        </button>
      </div>
      <div className="controls">
        <button className="btn" onClick={() => setTemp(temp + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setTemp(temp - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
