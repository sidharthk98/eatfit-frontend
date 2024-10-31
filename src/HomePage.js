import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to login page if there's no token
    }
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>You are logged in!</p>
      <button onClick={() => {
        localStorage.removeItem("token"); // Log out the user by removing token
        navigate("/"); // Redirect to login page
      }}>Logout</button>
    </div>
  );
}

export default HomePage;
