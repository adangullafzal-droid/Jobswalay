import React from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./RecommendedJobs.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import categoryJobs from "../data/categoryJobs";

function NextArrow({ onClick }) {
  return <div className="arrow next" onClick={onClick}><FaArrowRight /></div>;
}

function PrevArrow({ onClick }) {
  return <div className="arrow prev" onClick={onClick}><FaArrowLeft /></div>;
}

export default function RecommendedJobs() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,   // MOBILE
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,    // ✅ Fixed
          centerPadding: "0px"
        }
      }
    ]
  };

  return (
    <section className="recommended-section">
      <h2 className="section-title">Recommended Jobs For You</h2>
      <Slider {...settings}>
        {categoryJobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="location">
              <FaMapMarkerAlt /> {job.location}
            </p>
            <p className="level-salary">
              {job.type} • {job.salary}
            </p>
            <div className="job-buttons">
              <Link to={`/jobs/${job.id}`} className="view-btn">View Job →</Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}