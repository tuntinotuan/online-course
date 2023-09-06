import React from "react";
import Button from "../button/Button";

const TooltipEmptyButton = ({ title, go, onClick = () => {} }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-4">
      <p className="text-lg font-bold">{title}</p>
      <Button className="block font-bold py-3" full onClick={onClick} to="/">
        {go}
      </Button>
    </div>
  );
};

export default TooltipEmptyButton;
