import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <div className="welcome-container">
        <div className="welcome-bottom">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn purple" onClick={() => navigate("/signup")}>
            Create Account
          </button>
          <button className="btn light-purple" onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
