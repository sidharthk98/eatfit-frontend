import { useState } from "react";
import "./ForgotPasswordPage.css"

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    const response = await fetch("http://localhost:8000/api/accounts/forgot-password/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    alert(data.message || data.error);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Submit</button>
    </div>
  );
}

export default ForgotPasswordPage;
