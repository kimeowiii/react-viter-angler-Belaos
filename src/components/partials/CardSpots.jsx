import React from "react";

const CardSpots = ({image,title,description}) => {
  return (
    <>
      {/* Spot 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div
          className="h-48 bg-cover bg-center"
        //   style={{
        //     backgroundImage:
        //       "url('https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        //   }}
        style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
           {title}
          </h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <div className="flex items-center text-yellow-500">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="ml-2 text-gray-600">4.9 (128)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSpots;
