import React from "react";
import JobCard from "../Components/JobCard";
import categoryJobs from "../data/categoryJobs";

export default function Jobs() {
  return (
    <div className="jobs-page">
      <h1>All Jobs</h1>
      <div className="jobs-list">
        {categoryJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}