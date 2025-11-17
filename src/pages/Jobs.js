import React, { useState } from "react";
import { useLocation } from "react-router-dom";


import JobCard from "../Components/JobCard";
import jobsData from "../data/jobs.json";
import "./Jobs.css";

export default function Jobs() {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [loc, setLoc] = useState("");
  const [type, setType] = useState("");

  // ⭐ Get category from URL
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category");

  // ⭐ FILTER LOGIC
  const filtered = jobsData.filter((job) => {
    const matchTitle = job.title.toLowerCase().includes(search.toLowerCase());
    const matchLocation = job.location.toLowerCase().includes(loc.toLowerCase());
    const matchType = type ? job.type === type : true;

    // ⭐ Category wala match (MAIN ISSUE FIX)
    const matchCategory = selectedCategory
      ? job.category === selectedCategory
      : true;

    return matchTitle && matchLocation && matchType && matchCategory;
  });

  return (
    <>
      {/* <Navbar /> */}
      <main className="jobs-page">
        <div className="container">
          <h2>All Jobs</h2>

          <div className="filters">
            <input
              placeholder="Search title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
              placeholder="Location"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All types</option>
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </div>

          <div className="grid">
            {filtered.length ? (
              filtered.map((j) => <JobCard key={j.id} job={j} />)
            ) : (
              <p className="no">No jobs found</p>
            )}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}