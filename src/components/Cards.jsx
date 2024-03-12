import React from "react";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import CardHeading from "./CardHeading";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { addItems, removeItems } from "../slice/CardListSlice";

const Cards = ({ heading }) => {
  const status = useSelector((store) => store.cardList.statuses[heading]);
  const length = status.list.length;
  const dispatch = useDispatch();

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    let dropId = e.dataTransfer.getData("dropId");
    let dropStatus = e.dataTransfer.getData("dropStatus");
    let dropDesc = e.dataTransfer.getData("dropDesc");
    let dropTitle = e.dataTransfer.getData("dropTitle");
    const card = {
      id: dropId,
      title: dropTitle,
      desc: dropDesc,
      status: heading,
    };
    if (dropStatus !== heading) {
      dispatch(removeItems({ heading: dropStatus, id: dropId }));
      dispatch(addItems(card));
    }
  };

  return (
    <div
      className="w-1/3 h-full inline-block"
      droppable="true"
      onDragOver={(e) => {
        handleDragOver(e);
      }}
      onDrop={(e) => {
        handleDrop(e);
      }}
    >
      <CardHeading details={status.details} length={length} />
      <div className="py-4 px-2 overflow-y-scroll scroll-smooth h-[calc(92vh-140px)] flex-nowrap">
        {status.list &&
          status.list.map((card) => {
            return <SingleCard details={card} key={card.id} />;
          })}
        <Link
          to={`/${status.details.using}/new`}
          className="h-10 w-full flex justify-start gap-1 text-xl items-center px-2 py-2"
        >
          <GoPlus />
          <span>New</span>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
