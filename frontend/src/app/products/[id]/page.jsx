"use client";

import React, { useContext } from "react";
import { products } from "@/app/assets/products";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { CartContext } from "@/app/context/cartContext";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const { id } = params;

  const { addToCart, formatPrice } = useContext(CartContext);

  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);

  if (!product) return <div>Product not found</div>;

  return (
    <section>
      <div className="grid grid-cols-2 gap-10 h-[95vh] pt-5">
        {/* ................. IMAGE AND IMAGE PREVIEWS ................ */}
        <div className="w-full h-[90%] overflow-hidden">
          <div className="w-full h-full flex flex-row-reverse gap-3">
            <div className="h-full w-[80%] overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem]">
              <Image
                src={product.image}
                width={700}
                height={700}
                alt={`${product.image} image`}
                className="w-full object-cover hover:scale-105 transition-all duration-150 ease-in"
              />
            </div>

            <div className="h-full w-[20%] flex flex-col gap-5">
              {[1, 2, 3, 4, 5].map((p) => (
                <div key={p} className="overflow-hidden">
                  <Image
                    src={product.image}
                    width={700}
                    height={700}
                    alt={`${product.image} image`}
                    className="w-full object-cover hover:scale-105 transition-all duration-150 ease-in"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full pt-5">
          <div>
            <h1 className="font-bold text-5xl ">
              {product.name} - Demo Product
            </h1>
            <p>{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
