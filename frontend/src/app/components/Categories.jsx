import React from "react";
import Image from "next/image";
import ViewBtn from "./ViewBtn";

const Categories = () => {
  const categories = [
    {
      name: "Dresses",
      image: "/glams_bg.jpg",
    },
    {
      name: "Skirts",
      image: "/skirts.jpg",
    },
    {
      name: "Bubus",
      image: "/glams_bg.jpg",
    },
    {
      name: "Bottoms",
      image: "/skirts.jpg",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 my-12 sm:my-20 px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
        <h2 className="text-xl font-bold">Categories</h2>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 flex-wrap">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="overflow-hidden w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full border-3 border-gray-200 hover:border-glams-pink transition-all duration-300 cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-all duration-300 cursor-pointer rounded-full"
                />
              </div>
              <h3 className="text-sm text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="self-start sm:self-auto">
        <ViewBtn BtnText="View All" />
      </div>
    </div>
  );
};

export default Categories;
