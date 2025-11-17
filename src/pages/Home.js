import React from 'react';
import HeroSection from '../Components/HeroSection';
import RecommendedJobs from '../Components/RecommendedJobs';
import Categories from '../Components/Categories/Categories'; // NEW import

function Home() {
  return (
    <>
      <HeroSection />
      <RecommendedJobs />
      <Categories />  {/* Browse Top Categories section added */}
    </>
  );
}

export default Home;