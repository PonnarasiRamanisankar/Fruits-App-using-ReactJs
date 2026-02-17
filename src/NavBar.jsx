import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "green", padding: "15px" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
      <Link to="/apple" style={{ marginRight: "20px", color: "white" }}>Apple</Link>
      <Link to="/mango" style={{ marginRight: "20px", color: "white" }}>Mango</Link>
      <Link to="/watermelon" style={{ color: "white" }}>Watermelon</Link>
    </nav>
  );
}

export default Navbar;
