import React from "react";

const CardTips = ({ title, description, icon, tip }) => {
  return (
    <>
      {/* Tips */}
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-2">{icon}</span>
          <span>{tip}</span>
        </div>
      </div>
    </>
  );
};

export default CardTips;
