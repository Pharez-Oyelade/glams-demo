import React from "react";
import ProductGrid from "./ProductGrid";
import { products } from "../assets/products";
import ViewBtn from "./ViewBtn";

const NewArrivals = () => {
  const newArrivals = products.slice(-5);
  return (
    <div className="py-10 px-20">
      <div className="flex justify-between items-center">
        <div className="pb-10">
          <h2 className="">New Arrivals</h2>
          <p>Straight from the atelier. The latest expressions of our craft</p>
        </div>
        <ViewBtn />
      </div>
      <ProductGrid products={newArrivals} />
    </div>
  );
};

export default NewArrivals;
