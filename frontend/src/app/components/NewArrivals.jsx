import React from "react";
import ProductGrid from "./ProductGrid";
import { products } from "../assets/products";
import Headers from "./Headers";

const NewArrivals = () => {
  const newArrivals = products.slice(-5);
  return (
    <div className="py-10 px-20">
      <Headers
        title="New Arrivals"
        description="Straight from the atelier. The latest expressions of our craft"
        text="View All"
      />
      <ProductGrid products={newArrivals} />
    </div>
  );
};

export default NewArrivals;
