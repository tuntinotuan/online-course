import React from "react";
import { Button } from "../button";
import { IconTrash } from "../icon";

const ActionDelete = ({ onClick = () => {} }) => {
  return (
    <Button
      onClick={onClick}
      className="!py-1 px-1 bg-red-500 text-white rounded"
      borderNone
    >
      <IconTrash size={20}></IconTrash>
    </Button>
  );
};

export default ActionDelete;
