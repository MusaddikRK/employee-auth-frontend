import "../styles/dashboard.css";

function Navbar({ onLogout }) {
  return (
    <div className="navbar">
      <h3>Employee Portal</h3>
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;