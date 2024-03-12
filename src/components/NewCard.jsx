import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  completed_addItems,
  completed_removeItems,
  inProgress_addItems,
  inProgress_removeItems,
  notStarted_addItems,
  notStarted_removeItems,
} from "../slice/CardListSlice";
const NewCard = () => {
  const { heading, id } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState(heading);
  const getItem =
    heading === "notStarted"
      ? useSelector((store) =>
          store.cardList.notStarted.find((item) => item.id.toString() === id)
        )
      : heading === "inProgress"
      ? useSelector((store) =>
          store.cardList.inProgress.find((item) => item.id.toString() === id)
        )
      : useSelector((store) =>
          store.cardList.completed.find((item) => item.id.toString() === id)
        );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const add = (card) => {
    if (card.status === "notStarted") dispatch(notStarted_addItems(card));
    else if (card.status === "inProgress") dispatch(inProgress_addItems(card));
    else dispatch(completed_addItems(card));
  };
  const dlt = (id, heading) => {
    if (heading === "notStarted") dispatch(notStarted_removeItems(id));
    else if (heading === "inProgress") dispatch(inProgress_removeItems(id));
    else dispatch(completed_removeItems(id));
  };
  useEffect(() => {
    if (getItem) {
      setTitle(getItem.title);
      setDesc(getItem.desc);
    }
  }, [getItem]);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSaveClick = (e) => {
    if (title && desc && status) {
      const card = {
        id: Date.now(),
        title,
        desc,
        status,
      };
      if (id !== undefined) {
        e.preventDefault();
        dlt(id, heading);
      }
      add(card);
      navigate("/");
    }
  };
  const handleDeleteClick = (e) => {
    e.preventDefault();
    if (id) {
      dlt(id, heading);
      navigate("/");
    }
  };

  if (
    heading === "notStarted" ||
    heading === "inProgress" ||
    heading === "completed"
  ) {
    return (
      <div className="h-[92vh] px-8 py-2 overflow-hidden flex flex-col items-center justify-start text-black gap-4">
        <Link
          to={"/"}
          className="self-start py-2 px-3 rounded-md text-xl font-bold -tracking-tight border-2"
        >
          <IoMdArrowRoundBack />
        </Link>
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
            <label
              htmlFor="status"
              className="font-bold text-3xl -tracking-tighter"
            >
              Status:
            </label>
            <select
              id="status"
              defaultValue={heading}
              className="text-3xl font-bold -tracking-tight px-2 rounded-md outline-none"
              onChange={handleStatusChange}
            >
              <option value="notStarted">Not started</option>
              <option value="inProgress">In progress</option>
              <option value="completed">Completed</option>
            </select>
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
              disabled={id === undefined ? true : false}
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
