import React from "react";
import { Button } from "../button";
import { IconEye } from "../icon";

const ActionView = ({ to, onClick = () => {} }) => {
  return (
    <Button
      to={to}
      className="!py-1 px-1 bg-emerald-500 text-white rounded"
      borderNone
      onClick={onClick}
    >
      <IconEye></IconEye>
    </Button>
  );
};

export default ActionView;
