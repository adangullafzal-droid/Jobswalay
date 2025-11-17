import React from "react";
import "./CandidateRegister.css";

export default function CandidateRegister() {
  return (
    <div className="candidate-page">
      <div className="candidate-form-container">
        <h2>Candidate Registration</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Contact" required />
          <input type="text" placeholder="City" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}