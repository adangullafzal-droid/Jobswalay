import React from "react";
import "./ApplyModal.css";

export default function ApplyModal({ show, onClose, jobTitle }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Apply for {jobTitle}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Application submitted!");
            onClose();
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}