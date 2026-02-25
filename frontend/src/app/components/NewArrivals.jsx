import React from "react";
import ProductGrid from "./ProductGrid";
import { products } from "../assets/products";

const NewArrivals = () => {
  const newArrivals = products.slice(-5);
  return (
    <div className="py-10 px-20">
      <div className="pb-10">
        <h2 className="">New Arrivals</h2>
        <p>Straight from the atelier. The latest expressions of our craft</p>
      </div>
      <ProductGrid products={newArrivals} />
    </div>
  );
};

export default NewArrivals;
