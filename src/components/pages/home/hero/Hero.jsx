import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-blue-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="bg-fixed bg-cover bg-center w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Joy of Fishing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explore the best fishing spots, gear recommendations, and expert
            tips for anglers of all levels.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Start Fishing
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
