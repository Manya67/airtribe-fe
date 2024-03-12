import React from "react";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";
import CardHeading from "./CardHeading";
import NewCard from "./NewCard";
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

  return (
    <div className="w-1/3 border-[1px] border-gray-900">
      <CardHeading heading={heading} />
      <div className="py-2 px-2 flex flex-col justify-center items-center gap-4 overflow-scroll">
        {list &&
          list.map((card) => {
            return <SingleCard details={card} />;
          })}

        <Link
          to={`/${heading}/new`}
          className="h-16 border-[1px] w-full flex justify-start gap-2 text-xl items-center"
        >
          <span>New</span>
          <GoPlus />
        </Link>
      </div>
    </div>
  );
};

export default Cards;