import React, { useState } from 'react';

const FormPage = ({ addCard }) => {
  const [formData, setFormData] = useState({
    img: null, // Image file
    title1: '',
    title2: '',
    description1: '',
    description2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, img: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.img) {
      addCard(formData);
      setFormData({ img: null, title1: '', title2: '', description1: '', description2: '' });
    } else {
      alert('Please upload an image.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded sm:max-w-sm">
      <div className="mb-4">
        <label className="block text-gray-700">અહીં ફોટો મુકો</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      {formData.img && (
        <div className="mb-4">
          <img src={formData.img} alt="Preview" className="w-full h-40 object-cover rounded" />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700">મૃત્યુ પામેલા વ્યક્તિનું ગામ</label>
        <input
          type="text"
          name="title1"
          value={formData.title1}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Enter title 1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">મૃત્યુ પામેલ વ્યક્તિનું નામ</label>
        <input
          type="text"
          name="title2"
          value={formData.title2}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Enter title 2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">બેસન્ના ની તારીખ</label>
        <textarea
          name="description1"
          value={formData.description1}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Enter description 1"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">સ્થળ જ્યાં બેસનુ સ્થાન છે</label>
        <textarea
          name="description2"
          value={formData.description2}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="સ્થળ જ્યાં બેસનુ  છે"
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Add Card</button>
    </form>
  );
};

export default FormPage;
