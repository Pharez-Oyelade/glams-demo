import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const ProductGrid = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative rounded-2xl overflow-hidden w-full h-[300px]">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
            />
            <Heart className="absolute top-2 right-3 w-7 h-7 text-glams-pink cursor-pointer bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <div className="pt-3">
            <div className="flex justify-between gap-2">
              <p className="text-xs font-poppins uppercase text-glams-charcoal">
                {product.category}
              </p>
              <div
                className={`flex gap-1 ${product.colors.length > 1 ? "justify-between" : "justify-center"}`}
              >
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`w-3 h-3 rounded-full`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm font-poppins">{product.name}</p>
            <div className="flex">
              <p className="text-sm font-poppins text-glams-pink font-bold group-hover:opacity-0 group-hover:-translate-x-8 transition-all duration-300">
                $ {product.price}
              </p>
              <p className="text-sm font-poppins text-glams-pink font-bold opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 transition-all duration-300 cursor-pointer">
                ADD TO CART
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
