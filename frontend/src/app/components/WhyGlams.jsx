import React from "react";
import Headers from "./Headers";
import WhyCards from "./WhyCards";

const WhyGlams = () => {
  return (
    <section className="bg-glams-butter px-4 sm:px-10 lg:px-20 py-10">
      <Headers
        tag="About Us"
        title="Why Glams"
        description="We don't just sell clothes, we deliver a piece of culture wrapped in luxury"
        text="Read Our Story"
      />

      <WhyCards />
    </section>
  );
};

export default WhyGlams;
