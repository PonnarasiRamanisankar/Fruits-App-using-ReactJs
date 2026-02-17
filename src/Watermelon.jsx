import React from "react";
import watermelonImg from "./assets/watermelon.jpg";
import "./App.css";

function Watermelon() {
  return (
    <div className="centered-container">
      <h2 className="fruit-title">Watermelon 🍉</h2>
      <img src={watermelonImg} alt="Watermelon" className="fruit-image" />
      <p className="fruit-description">Watermelon is refreshing and full of water.</p>
    </div>
  );
}

export default Watermelon;
