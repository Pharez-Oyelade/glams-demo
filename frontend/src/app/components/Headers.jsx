import React from "react";
import ViewBtn from "./ViewBtn";

const Headers = ({ title, description, text }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="pb-10">
        <h2 className="">{title}</h2>
        <p>{description}</p>
      </div>
      <ViewBtn BtnText={text} />
    </div>
  );
};

export default Headers;
