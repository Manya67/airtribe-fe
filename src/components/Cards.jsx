import React from "react";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";
import CardHeading from "./CardHeading";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const Cards = ({ heading }) => {
  const notStartedList = useSelector((store) => store.cardList.notStarted);
  const inProgressList = useSelector((store) => store.cardList.inProgress);
  const completedList = useSelector((store) => store.cardList.completed);
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
    console.log("over now");
  };
  const handleDrop = (e) => {
    console.log("DROPPED");
    let dropId = e.dataTransfer.getData("todoId");
    console.log(dropId);
  };
  return (
    <div
      className="w-1/3 h-full"
      droppable
      onDragOver={(e) => {
        handleDragOver(e);
      }}
      onDrop={(e) => {
        handleDrop(e);
      }}
    >
      <CardHeading heading={heading} length={length} />
      <div className="py-4 px-2 flex flex-col justify-center items-center gap-4 overflow-y-scroll scroll-smooth max-h-[calc(92vh-140px)]">
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
