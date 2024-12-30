import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#20232a",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Home
      </button>
      <button
        onClick={() => navigate("/form")}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Form
      </button>
    </nav>
  );
}

export default Navbar;
