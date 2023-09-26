import React from "react";

const Field = ({ children }) => {
  return (
    <div className="flex flex-col items-start mb-10 gap-y-2">{children}</div>
  );
};

export default Field;
