import React from "react";

const InstructorCreateCard = ({ icon, title, sub, isActive = false }) => {
  return (
    <div
      className={`flex flex-col items-center text-center gap-4 w-[220px] h-[260px] border border-gray-400 hover:bg-purpleTextDC p-5 cursor-pointer ${
        isActive ? "border-[4px] border-primaryBg" : ""
      }`}
    >
      {icon}
      <h2 className="text-base font-bold">{title}</h2>
      <p>{sub}</p>
    </div>
  );
};

export default InstructorCreateCard;
