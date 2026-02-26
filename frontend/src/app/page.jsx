import React from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import NewArrivals from "./components/NewArrivals";
import WhyGlams from "./components/WhyGlams";
import Newsletter from "./components/Newsletter";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <WhyGlams />
      <NewArrivals />
      <Newsletter />
    </div>
  );
};

export default page;
