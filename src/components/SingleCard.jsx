import React from "react";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ details }) => {
  const { id, title, desc, status } = details;
  const navigate = useNavigate();
  const handleOpenCardClick = () => {
    navigate(`${status}/${id}`);
  };
  const handleDragStart = (e, id) => {
    console.log("dragging...");
    e.dataTransfer.setData("todoId", id);
  };

  return (
    <div
      draggable
      onDragStart={(e) => {
        handleDragStart(e, id);
      }}
      className="h-16 border-[1px] w-full px-2 py-1"
      onClick={handleOpenCardClick}
    >
      <span className="text-xl font-semibold">{title}</span>
      <p>{desc}</p>
    </div>
  );
};

export default SingleCard;
