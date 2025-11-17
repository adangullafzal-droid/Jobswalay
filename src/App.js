import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; // ✅ Import Footer
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import CandidateRegister from './pages/CandidateRegister';
import EmployerRegister from './pages/EmployerRegister';
import CandidateLogin from './pages/CandidateLogin';
import EmployerLogin from './pages/EmployerLogin';

// Categories Section
import Categories from './Components/Categories/Categories';
import CategoryDetail from './pages/CategoryDetail';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar sirf ek baar */}

      <Routes>
        {/* Home & Jobs Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />

        {/* Registration & Login */}
        <Route path="/register/candidate" element={<CandidateRegister />} />
        <Route path="/register/employer" element={<EmployerRegister />} />
        <Route path="/login/candidate" element={<CandidateLogin />} />
        <Route path="/login/employer" element={<EmployerLogin />} />

        {/* Categories Section */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categorySlug" element={<CategoryDetail />} />
      </Routes>

      <Footer /> {/* ✅ Footer add kiya */}
    </>
  );
}

export default App;