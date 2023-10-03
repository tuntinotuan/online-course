import React, { useState } from "react";
import ManageCurriculumItem from "./ManageCurriculumItem";
import { Button } from "../../../../components/button";
import { IconPlus } from "../../../../components/icon";
import Edit from "../../../../components/curriculum/Edit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleCreateNewSection } from "../../../../redux-toolkit/section/sectionHandlerThunk";

const ManageCurriculumList = ({ data }) => {
  const dispatch = useDispatch();
  const [showNewSection, setShowNewSection] = useState(false);
  const { control, watch } = useForm();
  const createSectionHandler = () => {
    const newTitle = watch("title");
    dispatch(handleCreateNewSection({ newTitle }));
    setShowNewSection(false);
  };
  return (
    <>
      {data?.map((section, index) => (
        <ManageCurriculumItem
          section={section}
          sectionLocate={index + 1}
        ></ManageCurriculumItem>
      ))}
      <div className="relative">
        <Button
          className={`flex items-center gap-1 font-bold ${
            showNewSection ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          onClick={() => setShowNewSection(true)}
        >
          <IconPlus></IconPlus>Section
        </Button>
        <IconPlus
          className={`absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-500 ${
            showNewSection
              ? "opacity-100 visible -translate-x-2/3 -rotate-[135deg]"
              : "opacity-0 invisible"
          }`}
          onClick={() => setShowNewSection(false)}
        ></IconPlus>
      </div>
      {showNewSection && (
        <Edit
          control={control}
          className="!m-0"
          childrenTitle={
            <h1 className="flex-shrink-0 text-base font-bold">New Section:</h1>
          }
          inputPlaceholder="Enter a title"
          onClickCancel={() => setShowNewSection(false)}
          btnTitle="Add Section"
          submitSave={createSectionHandler}
        ></Edit>
      )}
    </>
  );
};

export default ManageCurriculumList;
