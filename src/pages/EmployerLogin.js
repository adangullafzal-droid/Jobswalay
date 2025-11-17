import React from "react";
import "./EmployerLogin.css";

export default function EmployerLogin() {
  return (
    <div className="employer-login-page">
      <div className="employer-login-box">
        <h2>Company Login</h2>
        <form>
          <input type="email" placeholder="Work Email" required />
          <input type="password" placeholder="Password" required />
          <div className="robot-check">
            <input type="checkbox" id="employer-robot" />
            <label htmlFor="employer-robot">I am not a robot</label>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}