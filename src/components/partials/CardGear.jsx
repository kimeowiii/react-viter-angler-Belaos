import React from "react";

const CardGear = ({ image, title, description }) => {
  return (
    <>
      {/* Rods */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <div className="text-4xl mb-4 text-blue-600">{image}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default CardGear;
