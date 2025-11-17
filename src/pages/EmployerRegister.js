import React from "react";
import "./EmployerRegister.css";

export default function EmployerRegister() {
  return (
    <div className="employer-page">
      <div className="employer-form-container">
        <h2>Register Your Company</h2>
        <form>
          <h3>Company Information</h3>
          <input type="text" placeholder="Company Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Website" />
          <input type="text" placeholder="LinkedIn Profile" />
          <input type="text" placeholder="Facebook Profile" />

          <h3>Person In Contact</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Contact" required />
          <input type="text" placeholder="CNIC" required />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}