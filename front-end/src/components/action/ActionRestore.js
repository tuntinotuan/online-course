import React from "react";
import { Button } from "../button";

const ActionRestore = ({ onClick = () => {} }) => {
  return (
    <Button
      onClick={onClick}
      className="!py-1 px-1 bg-cyan-500 text-white rounded"
      borderNone
    >
      Restore
    </Button>
  );
};

export default ActionRestore;
