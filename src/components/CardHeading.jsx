import React from "react";
import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
const CardHeading = ({ heading }) => {
  const head =
    heading === "notStarted"
      ? "Not started"
      : heading === "inProgress"
      ? "In progress"
      : "Completed";
  return (
    <div className="h-10 flex justify-between items-center border-b-2 px-2 border-gray-900">
      <div className="flex w-auto gap-2 justify-center items-center">
        <span
          className={`text-xl font-bold -tracking-tight px-2 rounded-md ${
            heading === "notStarted"
              ? "bg-red-900"
              : heading === "inProgress"
              ? "bg-yellow-900"
              : "bg-green-900"
          }`}
        >
          {head}
        </span>
        <span>2</span>
      </div>
      <div className="flex w-auto gap-2 justify-center items-center">
        <span>
          <BsThreeDotsVertical />
        </span>
        <span>
          <GoPlus />
        </span>
      </div>
    </div>
  );
};

export default CardHeading;
