import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Find a career you <span className="red">love</span>
          </h1>
          <p className="hero-subtitle">
            Shape your future and discover opportunities with <span className="logo">Jobswala</span>
          </p>

          <div className="search-bar">
            <input type="text" placeholder="Job title or keyword" />
            <input type="text" placeholder="Location" />
            <button className="find-btn">Find Job</button>
          </div>
        </div>
      </div>
    </section>
  );
}