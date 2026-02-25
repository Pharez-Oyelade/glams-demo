import React from "react";
import ViewBtn from "./ViewBtn";

const Headers = ({ title, description, text }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 sm:pb-0">
      <div className="pb-4 sm:pb-10">
        <h2 className="">{title}</h2>
        <p>{description}</p>
      </div>
      <ViewBtn BtnText={text} />
    </div>
  );
};

export default Headers;
