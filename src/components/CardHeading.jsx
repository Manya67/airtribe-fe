import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import NewStatus from "./NewStatus";

const CardHeading = ({ details, length }) => {
  const [openBox, setOpenBox] = useState(false);

  const handleNewStatusOpenClick = () => {
    setOpenBox(true);
  };

  return (
    <div className="h-10 flex justify-between items-center px-2">
      <div className="flex w-auto gap-3 justify-center items-center">
        <span
          className={`text-xl text-black font-bold -tracking-tight px-2 rounded-md`}
          style={{ backgroundColor: details.color }}
        >
          {details.label.length < 15
            ? details.label
            : details.label.substring(0, 15) + "..."}
        </span>
        <span>{length}</span>
      </div>
      <div className="flex w-auto gap-2 justify-center items-center">
        <span>
          <BsThreeDotsVertical size={24} />
        </span>
        <span onClick={handleNewStatusOpenClick}>
          <GoPlus size={24} />
        </span>
      </div>
      {openBox && <NewStatus setOpenBox={setOpenBox} />}
    </div>
  );
};

export default CardHeading;
