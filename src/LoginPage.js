import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // Include styles for the page

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-form">
        <img src="https://via.placeholder.com/150" alt="EatFit Logo" className="logo" />
        <input type="email" placeholder="EMAIL" className="input-field" />
        <FontAwesomeIcon icon={faUser} className="icon user-icon" />
        <input type="password" placeholder="PASSWORD" className="input-field" />
        <FontAwesomeIcon icon={faLock} className="icon lock-icon" />
        
        <p className="forgot-password">Forgot password?</p>
        
        <button className="login-button">LOGIN</button>
        
        <Link to="/signup" className="create-account-link">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
