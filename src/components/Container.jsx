import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const Container = () => {
  const statuses = useSelector((store) => store.cardList.statuses);
  return (
    <div className="h-[92vh] w-full p-8 overflow-x-scroll overflow-y-hidden whitespace-nowrap gap-4">
      {Object.entries(statuses).map(function ([key, value]) {
        return <Cards heading={key} />;
      })}
    </div>
  );
};

export default Container;
