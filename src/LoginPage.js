import { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate to the home page
import "./LoginPage.css"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // React Router hook for navigation
  var Link = require('react-router-dom').Link
  
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/accounts/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Store token in local storage for later requests
        navigate("/home"); // Navigate to home page on successful login
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="EMAIL"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <p className="forgot-password">Forgot password?</p>
        <button onClick={handleLogin} className="login-button">LOGIN</button>
        <Link to="/signup" className="create-account-link">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
