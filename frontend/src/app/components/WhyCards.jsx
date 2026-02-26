import React from "react";
import { Palette, Earth, ScissorsLineDashed } from "lucide-react";

const WhyCards = () => {
  return (
    <div className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-10 lg:overflow-visible lg:pb-0 scrollbar-hide">
      <div className="shrink-0 snap-start bg-white px-5 py-10 border border-gray-200 hover:border-glams-pink hover:shadow-md w-[78vw] lg:w-full h-auto min-h-[220px] space-y-5">
        <Palette className="text-glams-pink bg-glams-butter p-2 w-12 h-12 rounded-full" />
        <h3 className="text-xl font-bold font-playfair">Authentic Fabrics</h3>
        <p className="text-sm">
          Sourced directly from local artisans, our fabrics tell a story of
          heritage and quality that machines cannot replace
        </p>
      </div>
      <div className="shrink-0 snap-start bg-white p-5 border border-gray-200 hover:border-glams-pink hover:shadow-md w-[78vw] lg:w-full h-auto min-h-[220px] space-y-5">
        <Earth className="text-glams-pink bg-glams-butter p-2 w-12 h-12 hover:border-glams-pink hover:shadow-md rounded-full" />
        <h3 className="text-xl font-bold font-playfair">Worldwide Shipping</h3>
        <p className="text-sm">
          From Lagos to London, New York to Nairobi. We ensure your piece
          arrives in pristine condition via DHL.
        </p>
      </div>
      <div className="shrink-0 snap-start bg-white p-5 border border-gray-200 hover:border-glams-pink hover:shadow-md w-[78vw] lg:w-full h-auto min-h-[220px] space-y-5">
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
