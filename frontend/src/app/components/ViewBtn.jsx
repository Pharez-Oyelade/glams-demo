import React from "react";
import { MoveRight } from "lucide-react";

const ViewBtn = () => {
  return (
    <div>
      <button className="px-5 py-2 rounded-full text-black flex items-center gap-2 cursor-pointer group">
        <span className="group-hover:text-glams-pink transition-all duration-300 ease-in-out">
          View All
        </span>
        <MoveRight className="w-6 h-6 group-hover:translate-x-2 group-hover:text-glams-pink transition-all duration-300 ease-in-out" />
      </button>
    </div>
  );
};

export default ViewBtn;
