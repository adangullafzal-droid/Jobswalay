import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import categoryJobs from "../data/categoryJobs"; 
import ApplyModal from "../Components/ApplyModal"; 
import "./JobDetail.css";

export default function JobDetail() {
  const { id } = useParams();
  const jobId = parseInt(id, 10);
  const job = categoryJobs.find((j) => j.id === jobId);

  const [showModal, setShowModal] = useState(false);

  if (!job) return <p style={{ padding: "20px" }}>Job not found.</p>;

  return (
    <div>
      <div className="detail-banner">
        <h1>{job.title}</h1>
        <p>{job.location} • {job.type}</p>
      </div>

      <div className="detail-container">
        {/* Left Side Content */}
        <div className="detail-content">
          <div className="detail-box">
            <h3>Job Description</h3>
            <p>{job.description}</p>
          </div>
          <div className="detail-box">
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Category:</strong> {job.category || "General"}</p>
          </div>
          <Link to="/jobs" className="back-btn">Back to Jobs</Link>
        </div>

        {/* Right Side Apply Button */}
        <div className="apply-container">
          <button className="apply-button" onClick={() => setShowModal(true)}>
            Apply Now
          </button>
        </div>
      </div>

      {/* Modal */}
      <ApplyModal
        show={showModal}
        onClose={() => setShowModal(false)}
        jobTitle={job.title}
      />
    </div>
  );
}