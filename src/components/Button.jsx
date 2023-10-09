import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-g leading-none bg-coral-red rounded-full text-white border-x-coral-red">
      {children}
    </button>
  );
};

export default Button;
