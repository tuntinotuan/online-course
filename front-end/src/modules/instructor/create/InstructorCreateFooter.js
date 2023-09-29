import React from "react";

const InstructorCreateFooter = ({ children }) => {
  return (
    <footer className="shadow-[0_-10px_10px_-10px_rgba(0,0,0,0.3)] fixed bottom-0 left-0 right-0 flex items-center justify-between bg-white p-4">
      {children}
    </footer>
  );
};

export default InstructorCreateFooter;
