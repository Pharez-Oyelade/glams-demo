import React from "react";
import { Palette, Earth, ScissorsLineDashed } from "lucide-react";

const WhyCards = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="bg-white px-5 py-10 border border-gray-200 hover:border-glams-pink hover:shadow-md w-full h-[250px] space-y-5">
        <Palette className="text-glams-pink bg-glams-butter p-2 w-12 h-12 rounded-full" />
        <h3 className="text-xl font-bold font-playfair">Authentic Fabrics</h3>
        <p className="text-sm">
          Sourced directly from local artisans, our fabrics tell a story of
          heritage and quality that machines cannot replace
        </p>
      </div>
      <div className="bg-white p-5 border border-gray-200 hover:border-glams-pink hover:shadow-md w-full h-[250px] space-y-5">
        <Earth className="text-glams-pink bg-glams-butter p-2 w-12 h-12 hover:border-glams-pink hover:shadow-md rounded-full" />
        <h3 className="text-xl font-bold font-playfair">Worldwide Shipping</h3>
        <p className="text-sm">
          From Lagos to London, New York to Nairobi. We ensure your piece
          arrives in pristine condition via DHL.
        </p>
      </div>
      <div className="bg-white p-5 border border-gray-200 hover:border-glams-pink hover:shadow-md w-full h-[250px] space-y-5">
        <ScissorsLineDashed className="text-glams-pink bg-glams-butter p-2 w-12 h-12 hover:border-glams-pink hover:shadow-md rounded-full" />
        <h3 className="text-xl font-bold font-playfair">Custom Tailoring</h3>
        <p className="text-sm">
          Luxury is fit. Provide your measurements for a bespoke fit that
          celebrates your unique silhouette.
        </p>
      </div>
    </div>
  );
};

export default WhyCards;
