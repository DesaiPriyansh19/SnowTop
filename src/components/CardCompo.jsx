import React from 'react';
import img1 from '../assets/Imag1.jpg';
import img2 from '../assets/Callinqury.jpg';
import img3 from '../assets/Car.jpg';
import img4 from '../assets/Chardham.jpg';
import img5 from '../assets/Plane.png';
import img6 from '../assets/Train.jpg';
import img7 from '../assets/blackpeapole.jpg';
import img8 from '../assets/handlogo.jpg';
import img9 from '../assets/helphand.jpg';
import img10 from '../assets/people.jpg';
import img11 from '../assets/Room.jpg';
import img12 from '../assets/cancelled.jpg';

const services = [
  { name: 'Tour Packages', img: img1 },
  { name: 'Car/Bus', img: img3 },
  { name: 'Hotel', img: img11 },
  { name: 'Air Ticket', img: img5 },
  { name: 'Reservation', img: img6 },
  { name: 'Registration', img: img4 },
  { name: 'B2B', img: img9 },
  { name: 'Booking Policy', img: img8 },
  { name: 'Our Partners', img: img10 },
  { name: 'Cancellation', img: img12 },
  { name: 'Inquiry', img: img2 },
  { name: 'About Us', img: img7 },
];

const ServiceCard = ({ name, img }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-lg p-4 h-80 transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50"> 
        {/* Card hover effects: shadow and scale */}
        <img src={img} alt={name} className="w-[90%] h-44 object-contain mb-4 transform transition-all duration-300 hover:scale-105" />
        {/* Image hover effect: zoom in */}
        
        <h3 className="text-lg font-semibold text-gray-700 mb-4">{name}</h3>
        
        <button className="px-4 py-2 rounded-full border-2 border-black text-black mt-auto transition-all duration-300 hover:bg-black hover:text-white">
          {/* Button hover effects: background color and text color change */}
          Learn More
        </button>
      </div>
      
      );
      

  };
  

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 mt-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {services.map((service) => (
        <ServiceCard key={service.name} name={service.name} img={service.img} />
      ))}
    </div>
  );
};

export default ServicesGrid;
