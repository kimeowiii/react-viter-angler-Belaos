import React from "react";
import CardSpots from "../../../partials/CardSpots";

const FishingSpots = () => {
  return (
    <>
      {/* Fishing Spots Section */}
      <section id="spots" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Top Fishing Spots
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the best locations for your next fishing adventure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardSpots
              title={"Lake Serenity"}
              description={
                "Perfect for bass and trout fishing with calm waters and scenic views."
              }
              image={
                "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <CardSpots
              title={"River Rapids"}
              description={
                "Challenging spot for salmon and steelhead with strong currents."
              }
              image={
                "https://images.unsplash.com/photo-1531517765038-ee4843460f44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <CardSpots
              title={"Deep Sea Haven"}
              description={
                "Offshore fishing for marlin, tuna, and other big game fish."
              }
              image={
                "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FishingSpots;
