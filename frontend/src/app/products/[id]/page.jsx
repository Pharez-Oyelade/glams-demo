import React from "react";
import { products } from "@/app/assets/products";
import Navbar from "@/app/components/Navbar";

const page = async ({ params }) => {
  const { id } = await params;

  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);

  if (!product) return <div>Product not found</div>;

  return (
    <section>
      <div>{product.name}</div>
    </section>
  );
};

export default page;
