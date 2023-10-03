import React from "react";
import { CurriculumProvider } from "./curriculum-context";

const Curriculum = ({ children }) => {
  return (
    <CurriculumProvider>
      <div className="bg-grayF7 border border-primaryBlack pb-5">
        {children}
      </div>
    </CurriculumProvider>
  );
};

export default Curriculum;
