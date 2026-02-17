import React from "react";
import mangoImg from "./assets/mango.jpg";
import "./App.css";

function Mango() {
  return (
    <div className="centered-container">
      <h2 className="fruit-title">Mango 🥭</h2>
      <img src={mangoImg} alt="Mango" className="fruit-image" />
      <p className="fruit-description">Mango is known as the king of fruits.</p>
    </div>
  );
}

export default Mango;
