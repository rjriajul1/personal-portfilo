import React from "react";
import { Link } from "react-router";

const Button = ({url}) => {
  return (
    <div>
      <Link
        to={url}
        target="_blank"
      >
        <button className="bg-primary hover:cursor-pointer px-6 py-3 rounded-xl font-bold transition-all duration-500 hover:bg-transparent hover:border-2 hover:border-primary">
          Resume
        </button>
      </Link>
    </div>
  );
};

export default Button;
