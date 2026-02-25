import React from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import NewArrivals from "./components/NewArrivals";
import WhyGlams from "./components/WhyGlams";

const page = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <WhyGlams />
      <NewArrivals />
    </div>
  );
};

export default page;
