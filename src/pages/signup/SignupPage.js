import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

function Signup() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(""); // Success or error message
	const [error, setError] = useState("");
	const [emailError, setEmailError] = useState(""); // Email validation error
	const [passwordError, setPasswordError] = useState(""); // Password validation error
	const navigate = useNavigate();
	var Link = require("react-router-dom").Link;

	// Regular expressions for validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
	const passwordRegex =
		/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
	// Password must be at least 8 characters, with at least one uppercase, one digit, and one special character

	// Validate email as the user types
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		if (!emailRegex.test(e.target.value)) {
			setEmailError("Please enter a valid email address.");
		} else {
			setEmailError("");
		}
	};

	// Validate password as the user types
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		if (!passwordRegex.test(e.target.value)) {
			setPasswordError(
				"Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
			);
		} else {
			setPasswordError("");
		}
	};

	const handleSignup = async () => {
		// Check if there are any validation errors before making the API call
		if (emailError || passwordError) {
			setError("Please fix the errors before submitting.");
			return;
		}

		try {
			const response = await fetch(
				"http://localhost:8000/api/accounts/signup/",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, email, password }),
				}
			);

			if (response.ok) {
				setMessage("User registered successfully. Redirecting to login...");

				// Delay to allow the user to see the message before redirecting
				setTimeout(() => {
					navigate("/"); // Redirect to login page
				}, 2000); // 2-second delay before navigating
			} else {
				const errorData = await response.json();
				setError(errorData.error || "Signup failed. Please try again.");
			}
		} catch (err) {
			setError("Failed to connect to the server. Please try again later.");
		}
	};

	return (
		<div className="signup-container">
			<div className="signup-form">
				<h2>Sign Up</h2>
				<input
					type="text"
					placeholder="USERNAME"
					className="input-field"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					placeholder="EMAIL"
					className="input-field"
					value={email}
					onChange={handleEmailChange}
				/>
				{emailError && <p className="error-message">{emailError}</p>}
				<input
					type="password"
					placeholder="PASSWORD"
					className="input-field"
					value={password}
					onChange={handlePasswordChange}
				/>
				{passwordError && <p className="error-message">{passwordError}</p>}
				{message && <p className="success-message">{message}</p>}
				{error && <p className="error-message">{error}</p>}
				<button
					onClick={handleSignup}
					className="signup-button"
					disabled={emailError || passwordError}>
					Sign Up
				</button>
				<p>
					Already have an account?{" "}
					<Link to="/login" className="login-link">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Signup;
