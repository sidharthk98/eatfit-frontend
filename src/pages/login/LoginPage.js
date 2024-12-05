import { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate to the home page
import "./LoginPage.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate(); // React Router hook for navigation
	var Link = require("react-router-dom").Link;

	const validCredentials = {
		"vishwa@gmail.com": "vishwa@123",
		"sid@gmail.com": "pass123",
		"manan2k01@gmail.com": "Manan123@",
		"dundi123@gmail.com": "qwer1234",
		"rohitraval@gmail.com": "qaz@1234",
	};

	const handleLogin = () => {
		// Check if email exists in the dictionary and if the password matches
		if (validCredentials[email] && validCredentials[email] === password) {
			localStorage.setItem("token", "dummyToken"); // Store a dummy token
			navigate("/"); // Redirect to the home page
		} else {
			setError("Invalid credentials"); // Show error message
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
				<button onClick={handleLogin} className="login-button">
					LOGIN
				</button>
				<Link to="/signup" className="create-account-link">
					Create Account
				</Link>
			</div>
		</div>
	);
}

export default Login;
