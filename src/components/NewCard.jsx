import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { addItems } from "../slice/CardListSlice";
import { removeItems } from "../slice/CardListSlice";
import { toast } from "react-hot-toast";

const NewCard = () => {
  const { heading, id } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState(heading);
  const totalStatus = useSelector((store) => store.cardList.statuses);
  const getItem = useSelector((store) =>
    store.cardList.statuses[heading]?.list?.find(
      (item) => item.id.toString() === id
    )
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (getItem !== undefined) {
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
        dispatch(removeItems({ heading, id }));
      }
      dispatch(addItems(card));
      toast.success("Card added!");
      navigate("/");
    }
  };
  const handleDeleteClick = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(removeItems({ heading, id }));
      toast.success("Card deleted!");
      navigate("/");
    }
  };

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
            className="border-2 border-gray-900 w-full h-[40%] px-4 rounded-xl outline-none"
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
            {Object.entries(totalStatus).map(function ([key, value]) {
              return <option value={key}>{value.details.label}</option>;
            })}
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
};

export default NewCard;
