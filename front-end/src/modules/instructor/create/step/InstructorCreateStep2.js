import React from "react";
import Input from "../../../../components/input/Input";

const InstructorCreateStep2 = ({ control }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mx-auto">
        How about a working title?
      </h1>
      <p className="text-base">
        It's ok if you can't think of a good title now. You can change it later.
      </p>
      <div className="w-[600px]">
        <Input
          control={control}
          name="titleCreation"
          placeholder="e.g. Learn Photoshop CS6 from Scratch"
          size={38}
        ></Input>
      </div>
    </>
  );
};

export default InstructorCreateStep2;
