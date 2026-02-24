import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Dashboard() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <Navbar onLogout={handleLogout} />

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Welcome, {user?.name} 👋</h2>
          <p>This is your professional dashboard.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;