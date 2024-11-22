import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import DynamicDivs from './components/DynamicDivs';
import FormPage from './components/FormPage';
import img from '../src/photos/WhatsApp.jpg'
function App() {
  // State to store card data
  const [data, setData] = useState([
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ1',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ2',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ3',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ3',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ2',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ2',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ2',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ2',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ2',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV8rZxehXRDDoQtgch6YPBbepdEdxclCzHw&s',
      title1: 'મૃત્યુ પામેલ વ્યક્તિ2',
      title2: 'મૃત્યુ પામેલા વ્યક્તિનું ગામ',
      description1: 'તારીખ/22/22/22 ના રોજ મૃત્યુ પામેલા છે',
      description2: 'બેસના નુ સ્થળ આને તારીખ',
    },
  ]);

  // Function to add new card data
  const addCard = (newCard) => {
    setData([...data, newCard]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DynamicDivs data={data} />} />
        <Route path="/add" element={<FormPage addCard={addCard} />} />
      </Routes>
    </Router>
  );
}

export default App;
