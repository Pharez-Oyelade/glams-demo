import React from "react";
import { products } from "@/app/assets/products";

const page = async ({ params }) => {
  const { id } = await params;

  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div>{product.name}</div>
    </div>
  );
};

export default page;
