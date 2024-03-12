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
      className="h-16 border-[1px] border-gray rounded-lg w-full px-2 py-1 text-black flex flex-shrink-0 flex-col shadow-md"
      onClick={handleOpenCardClick}
    >
      <span className="text-2xl font-semibold">{title}</span>
      {desc.length < 40 ? (
        <p>{desc}</p>
      ) : (
        <p>{desc.substring(0, 40) + "..."}</p>
      )}
    </div>
  );
};

export default SingleCard;
