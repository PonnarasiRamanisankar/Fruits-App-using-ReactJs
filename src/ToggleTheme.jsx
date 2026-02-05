import React, { useState } from "react";

function ToggleTheme() {
  const [show, setShow] = useState(true);
  const [dark, setDark] = useState("dark");

  return (
    <div
      style={{
        backgroundColor: dark === "dark" ? "black" : "white",
        color: dark === "dark" ? "white" : "black",
        height: "100vh"
      }}
    >
      <h1>Welcome To KCE</h1>

      <button
        onClick={() => setDark(dark === "dark" ? "light" : "dark")}
      >
        {dark === "dark" ? "Light Theme" : "Dark Theme"}
      </button>

    </div>
  );
}

export default ToggleTheme;
