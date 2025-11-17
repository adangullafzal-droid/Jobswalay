import React from "react";
import { Link } from "react-router-dom";
import categoryData from "./categoryData";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="categories-section">
      <h2 className="main-heading">Browse Top Categories</h2>
      <p className="sub-heading">Find the sector that actually fits your skills</p>

      <div className="category-grid">
        {categoryData.map((item) => (
          <div className="category-card" key={item.id}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="openings">{item.openings} openings</p>
            <Link to={`/categories/${item.slug}`} className="explore-btn">
              Explore
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}