import React from "react";
import Cards from "./Cards";

const Container = () => {
  return (
    <div className="h-[92vh] p-8 overflow-hidden flex gap-4">
      <Cards heading="notStarted" />
      <Cards heading="inProgress" />
      <Cards heading="completed" />
    </div>
  );
};

export default Container;
