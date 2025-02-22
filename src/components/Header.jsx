import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css"; // ✅ Import the new CSS
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <h1>Online Auction</h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/post-auction" onClick={() => setMenuOpen(false)}>Post Auction</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>

        {/* User Dropdown */}
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <FaUserCircle size={22} /> Account
          </button>
          <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <Link to="/signin" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Sign In</Link>
            <Link to="/signup" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
