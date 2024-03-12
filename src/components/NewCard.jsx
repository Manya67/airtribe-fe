import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completed_addItems,
  completed_removeItems,
  inProgress_addItems,
  inProgress_removeItems,
  notStarted_addItems,
  notStarted_removeItems,
} from "../slice/CardListSlice";
import { useNavigate, useParams } from "react-router-dom";

const NewCard = () => {
  const { heading, id } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const status =
    heading === "notStarted"
      ? "Not started"
      : heading === "inProgress"
      ? "In progress"
      : "Completed";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleSaveClick = () => {
    if (title && desc && heading) {
      const card = {
        id: Date.now(),
        title,
        desc,
        status,
      };
      if (heading === "notStarted") dispatch(notStarted_addItems(card));
      else if (heading === "InProgress") dispatch(inProgress_addItems(card));
      else dispatch(completed_addItems(card));
      navigate("/");
    }
  };
  const handleDeleteClick = () => {
    if (id) {
      if (heading === "notStarted") dispatch(notStarted_removeItems(card));
      else if (heading === "InProgress") dispatch(inProgress_removeItems(card));
      else dispatch(completed_removeItems(card));
      navigate("/");
    }
  };
  if (
    heading === "notStarted" ||
    heading === "inProgress" ||
    heading === "completed"
  ) {
    return (
      <div className="h-[92vh] p-8 overflow-hidden flex justify-center">
        <div className="w-[50%] min-h-[50%] border-2 border-gray-900 p-4 flex flex-col rounded-md gap-3">
          <div className="flex gap-2 h-2/6 items-start flex-col text-xl">
            <label
              htmlFor="title"
              className="font-bold text-3xl -tracking-tighter"
            >
              Title
            </label>
            <input
              id="title"
              value={title}
              onChange={handleTitleChange}
              type="text"
              required
              placeholder="write your card title"
              className=" border-2 border-gray-900 w-full h-[40%] px-4 rounded-xl outline-none"
            />
          </div>
          <div className="flex gap-2 h-2/6 items-start flex-col text-xl">
            <label
              htmlFor="desc"
              className="font-bold text-3xl -tracking-tighter"
            >
              Description
            </label>
            <textarea
              id="desc"
              value={desc}
              onChange={handleDescChange}
              required
              placeholder="write your card description"
              rows="30"
              cols="40"
              className=" border-2 border-gray-900 w-full px-4 rounded-xl  outline-none py-2"
            />
          </div>
          <div className="flex gap-2 h-1/6 items-center text-xl mb-5">
            <span className="font-bold text-3xl -tracking-tighter">
              Status:
            </span>
            <span className="text-3xl font-bold -tracking-tight px-2 rounded-md">
              {status}
            </span>
          </div>
          <div className="h-[10%] flex justify-between">
            <button
              type="submit"
              onClick={handleSaveClick}
              className="bg-green-300 px-3 rounded-md text-xl font-bold -tracking-tight"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleDeleteClick}
              disabled={id ? true : false}
              // check
              className="bg-red-300 px-3 rounded-md text-xl font-bold -tracking-tight"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <>EERORRO!!</>;
  }
};

export default NewCard;
