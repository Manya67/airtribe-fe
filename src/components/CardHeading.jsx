import React from "react";
import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
const CardHeading = ({ heading, length }) => {
  const head =
    heading === "notStarted"
      ? "Not started"
      : heading === "inProgress"
      ? "In progress"
      : "Completed";
  return (
    <div className="h-10 flex justify-between items-center px-2">
      <div className="flex w-auto gap-3 justify-center items-center">
        <span
          className={`text-xl text-black font-bold -tracking-tight px-2 rounded-md ${
            heading === "notStarted"
              ? "bg-red-200"
              : heading === "inProgress"
              ? "bg-yellow-100"
              : "bg-green-200"
          }`}
        >
          {head}
        </span>
        <span>{length}</span>
      </div>
      <div className="flex w-auto gap-2 justify-center items-center">
        <span>
          <BsThreeDotsVertical size={24} />
        </span>
        <Link to={`/${heading}/new`}>
          <GoPlus size={24} />
        </Link>
      </div>
    </div>
  );
};

export default CardHeading;
