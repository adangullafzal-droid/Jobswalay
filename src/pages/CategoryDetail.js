import React from "react";
import { useParams, Link } from "react-router-dom";
import categoryJobs from "../data/categoryJobs";
import "./CategoryDetail.css";

export default function CategoryDetail() {
  const { categorySlug } = useParams();

  const jobs = categoryJobs.filter(job => job.categorySlug === categorySlug);

  return (
    <div className="category-page">
      <div className="category-banner">
        <h1>{categorySlug.replace("-", " ")}</h1>
        <p>Discover curated roles</p>
        <span className="small-line">
          Browse the newest opportunities from vetted teams
        </span>
      </div>

      <div className="jobs-list">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="job-card" key={job.id}>
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
            </div>
          ))
        ) : (
          <p style={{ padding: "20px", fontStyle: "italic" }}>
            No jobs found in this category.
          </p>
        )}
      </div>
    </div>
  );
}