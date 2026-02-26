"use client";

import React from "react";
import ProductGrid from "./ProductGrid";
import { products } from "../assets/products";
import Headers from "./Headers";

const NewArrivals = () => {
  const newArrivals = products.slice(-5);
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-10 lg:px-20">
      <Headers
        tag="New In"
        title="New Arrivals"
        description="Straight from the atelier — the latest expressions of our craft."
        text="View All"
      />
      <ProductGrid products={newArrivals} />
    </section>
  );
};

export default NewArrivals;
