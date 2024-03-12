import React from "react";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import CardHeading from "./CardHeading";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  completed_addItems,
  completed_removeItems,
  inProgress_addItems,
  inProgress_removeItems,
  notStarted_addItems,
  notStarted_removeItems,
} from "../slice/CardListSlice";

const Cards = ({ heading }) => {
  const notStartedList = useSelector((store) => store.cardList.notStarted);
  const inProgressList = useSelector((store) => store.cardList.inProgress);
  const completedList = useSelector((store) => store.cardList.completed);
  const dispatch = useDispatch();
  const list =
    heading === "notStarted"
      ? notStartedList
      : heading === "inProgress"
      ? inProgressList
      : completedList;
  const length =
    heading === "notStarted"
      ? notStartedList.length
      : heading === "inProgress"
      ? inProgressList.length
      : completedList.length;
  const handleDragOver = (e) => {
    e.preventDefault();
  };
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
      dlt(dropId, dropStatus);
      add(card);
    }
  };
  return (
    <div
      className="w-1/3 h-full"
      droppable="true"
      onDragOver={(e) => {
        handleDragOver(e);
      }}
      onDrop={(e) => {
        handleDrop(e);
      }}
    >
      <CardHeading heading={heading} length={length} />
      <div className="py-4 px-2 overflow-y-scroll scroll-smooth max-h-[calc(92vh-140px)]">
        {list &&
          list.map((card) => {
            return <SingleCard details={card} key={card.id} />;
          })}
        <Link
          to={`/${heading}/new`}
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
