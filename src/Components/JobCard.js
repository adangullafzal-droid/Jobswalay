import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-info">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <div className="job-meta">
          <span>{job.location}</span>
          <span>{job.type}</span>
          <span>{job.salary}</span>
        </div>
      </div>
      <Link to={`/jobs/${job.id}`} className="view-btn">View Details</Link>
      <Link to={`/apply/${job.id}`} className="apply-btn">Apply Now</Link>
    </div>
  );
}