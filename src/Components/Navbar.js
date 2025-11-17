import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setRegisterOpen(false);
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      setRegisterOpen(false);
      setLoginOpen(false);
    }
  }, [menuOpen]);

  return (
    <header className="navbar" ref={navRef}>
      <div className="nav-left">
        <h2 className="logo">
          <span className="blue">Jobs</span>
          <span className="red">wala</span>
        </h2>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-right ${menuOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>❌</button>

        <div className="nav-buttons">
          <div className="dropdown">
            <button
              className="register-btn"
              onClick={() => setRegisterOpen(!registerOpen)}
            >
              Register
            </button>
            <div className={`dropdown-menu ${registerOpen ? "active" : ""}`}>
              <Link to="/register/candidate" onClick={() => setMenuOpen(false)}>Candidate</Link>
              <Link to="/register/employer" onClick={() => setMenuOpen(false)}>Employer</Link>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="login-btn"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              Login
            </button>
            <div className={`dropdown-menu ${loginOpen ? "active" : ""}`}>
              <Link to="/login/candidate" onClick={() => setMenuOpen(false)}>Candidate</Link>
              <Link to="/login/employer" onClick={() => setMenuOpen(false)}>Employer</Link>
            </div>
          </div>

          <Link to="/login/employer" className="post-btn" onClick={() => setMenuOpen(false)}>
            Post a Job
          </Link>
        </div>
      </div>
    </header>
  );
}