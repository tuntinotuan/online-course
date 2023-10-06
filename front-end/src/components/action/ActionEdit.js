import React from "react";
import { Button } from "../button";
import { IconPen } from "../icon";

const ActionEdit = ({ to }) => {
  return (
    <Button
      to={to}
      className="!py-1 px-1 bg-indigo-500 text-white rounded"
      borderNone
    >
      <IconPen size={20}></IconPen>
    </Button>
  );
};

export default ActionEdit;
