import React from "react";
import "./CandidateLogin.css";

export default function CandidateLogin() {
  return (
    <div className="candidate-login-page">
      <div className="candidate-login-box">
        <h2>User Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <p className="forget-password">Forget Password?</p>
          <div className="robot-check">
            <input type="checkbox" id="robot" />
            <label htmlFor="robot">I am not a robot</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}