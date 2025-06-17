import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="app-shell">
      <div className="login-container">
        <h2>
          Signin to your <br /> PopX account
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button className="btn disabled">Login</button>
      </div>
    </div>
  );
}
