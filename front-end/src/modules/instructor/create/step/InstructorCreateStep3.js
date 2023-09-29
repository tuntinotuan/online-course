import React from "react";
import DropdownTopic from "../../../../components/dropdown/DropdownTopic";

const InstructorCreateStep3 = ({ ...props }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mx-auto">
        What category best fits the knowledge you'll share?
      </h1>
      <p className="text-base">
        If you're not sure about the right category, you can change it later.
      </p>
      <div className="flex items-center gap-5 w-[600px]">
        <DropdownTopic placeholder="Choose a topic" {...props}></DropdownTopic>
      </div>
    </>
  );
};

export default InstructorCreateStep3;
