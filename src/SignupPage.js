import React from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css"; // Optional styling for signup

function SignupPage() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src="https://via.placeholder.com/100" alt="Logo" className="logo" />
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="signup-button">Sign Up</button>
        <p>
          Already have an account?{" "}
          <Link to="/" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
