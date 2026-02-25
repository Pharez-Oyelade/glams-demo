import React from "react";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import NewArrivals from "./components/NewArrivals";

const page = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
    </div>
  );
};

export default page;
