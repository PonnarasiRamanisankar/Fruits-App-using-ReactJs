import React from "react";
import appleImg from "./assets/apple.jpg";
import "./App.css";

function Apple() {
  return (
    <div className="centered-container">
      <h2 className="fruit-title">Apple 🍎</h2>
      <img src={appleImg} alt="Apple" className="fruit-image" />
      <p className="fruit-description">Apple is rich in fiber and vitamins.</p>
    </div>
  );
}

export default Apple;
