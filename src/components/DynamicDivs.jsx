import React, { useState } from 'react';

const DynamicDivs = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data
    .filter(item =>
      item.title1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title2.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aPriority = a.title1.toLowerCase().includes(searchQuery.toLowerCase()) ? 1 : 0;
      const bPriority = b.title1.toLowerCase().includes(searchQuery.toLowerCase()) ? 1 : 0;
      return bPriority - aPriority;
    });

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="બેસણા શોધો"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((item, index) => (
          <div key={index} className="border rounded shadow-md p-4 bg-white">
            <img src={item.img} alt="Card" className="w-full h-40 object-cover mb-2 rounded" />
            <h1 className="text-lg font-bold">{item.title1}</h1>
            <h1 className="text-md font-semibold">{item.title2}</h1>
            <p className="mt-2 text-sm">{item.description1}</p>
            <p className="mt-1 text-sm">{item.description2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivs;
