import React from "react";

const UserTopBlock = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 text-center border border-transparent border-b-gray-300 py-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default UserTopBlock;
