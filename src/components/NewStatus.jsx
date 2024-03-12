import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStatus } from "../slice/CardListSlice";
import { toCamelCase } from "../assets/functions";
import { toast } from "react-hot-toast";

const NewStatus = ({ setOpenBox }) => {
  const [statusName, setStatusName] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleNewStatusCloseClick = () => {
    setOpenBox(false);
  };
  const handleNewStatusSaveClick = () => {
    const newStatus = {
      details: {
        label: statusName,
        using: toCamelCase(statusName),
        color,
      },
      list: [],
    };
    if (statusName && color) {
      dispatch(addStatus(newStatus));
      setOpenBox(false);
      toast.success("New status added!");
    }
  };
  return (
    <div className="fixed z-[1] left-0 top-0 w-full h-full bg-blue-100">
      <div className="h-full w-full flex items-center justify-center">
        <div className=" bg-slate-400 p-10 border-2 border-black w-[50%] text-black flex flex-col gap-4 rounded-lg">
          <div className="flex flex-col text-lgw-[50%] gap-2">
            <label htmlFor="statusName">Status name</label>
            <input
              id="statusName"
              type="text"
              placeholder="Name of status"
              required
              className="border-2 border-black p-4 rounded-md outline-none"
              value={statusName}
              onChange={(e) => {
                setStatusName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col text-lgw-[50%] gap-2">
            <label htmlFor="color">Color</label>
            <input
              id="color"
              type="text"
              placeholder="Provide color(in hex)"
              required
              className="border-2 border-black p-4 rounded-md outline-none"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
          <div className="h-[10%] flex justify-between">
            <button
              type="submit"
              onClick={handleNewStatusSaveClick}
              className="bg-blue-500 py-3 px-3 rounded-md text-xl font-bold -tracking-tight"
            >
              Save
            </button>
            <button
              type="submit"
              onClick={handleNewStatusCloseClick}
              className="bg-red-500 py-3 px-3 rounded-md text-xl font-bold -tracking-tight"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewStatus;
