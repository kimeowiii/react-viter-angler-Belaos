import React from "react";
import CardGear from "../../../partials/CardGear";

const GearGuide = () => {
  return (
    <>
      {/* Gear Guide Section */}
      <section id="gear" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Essential Fishing Gear
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Equip yourself with the right tools for a successful fishing trip
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardGear
                image={"🎣"}
                title={" Fishing Rods"}
                description={
                  "From ultralight to heavy action rods for all fishing styles."
                }
            />
            <CardGear
                image={"🌀"}
                title={" Reels"}
                description={
                  " Spinning, baitcasting, and fly reels for different techniques."
                }
            />
            <CardGear
                image={"🐟"}
                title={" Lures and Bait"}
                description={
                  "Artificial lures and live bait options for various fish species."
                }
            />
            <CardGear
                image={"🧰"}
                title={"Accessories"}
                description={
                  "Tackle boxes, nets, pliers, and other essential tools."
                }
            />
          </div>
            {/* Featured Product */}
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
                <div
                  className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                  }}
                ></div>
                <div className="md:w-1/2 p-8">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Pro Angler Combo Kit
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Everything you need to start fishing in one complete
                    package. Includes rod, reel, tackle box with assorted lures,
                    and fishing accessories.
                  </p>
                  <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold text-gray-800">
                      $149.99
                    </span>
                    <span className="ml-4 text-sm text-gray-500 line-through">
                      $199.99
                    </span>
                    <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">
                      25% OFF
                    </span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full md:w-auto">
                    Add to Cart
                  </button>
                </div>
            </div>
          </div>
         </div>{" "}
      </section>
    </>
  );
};

export default GearGuide;
