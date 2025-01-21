import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicesGrid from './components/CardCompo';  // Assuming your ServicesGrid component is here
import FormPage from './components/FormPage';  // Import your other pages/components as needed

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<ServicesGrid />} />
        {/* Add other routes as needed */}
        <Route path="/form" element={<FormPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
  