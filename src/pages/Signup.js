import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className="app-shell">
      <div className="signup-container">
        <h2>Create your <br /> PopX account</h2>

        <div className="form-group">
          <label>Full Name<span>*</span></label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label>Phone number<span>*</span></label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label>Email address<span>*</span></label>
          <input type="email" placeholder="Enter your email address" />
        </div>

        <div className="form-group">
          <label>Password<span>*</span></label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="form-group">
          <label>Company Name<span>*</span></label>
          <input type="text" placeholder="Enter your company name" />
        </div>

        <div className="form-group radio">
          <label>Are you an Agency?<span>*</span></label>
          <div className="radio-options">
            <label><input type="radio" name="agency" /> Yes</label>
            <label><input type="radio" name="agency" /> No</label>
          </div>
        </div>

        <button className="btn primary" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}
