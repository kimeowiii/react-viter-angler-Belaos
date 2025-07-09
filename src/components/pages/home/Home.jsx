import React from "react";
import Navigation from "../../partials/Navigation";
import Footer from "../../partials/Footer";
import Tips from "./tips/Tips";
import FishingSpots from "./fishingSpots/FishingSpots";
import GearGuide from "./gearGuide/GearGuide";
import Hero from "./Hero/Hero";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero/>
      <FishingSpots />
      <GearGuide />
      <Tips />
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
