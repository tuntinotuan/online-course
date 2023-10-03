import React from "react";
import Block from "./Block";
import Edit from "./Edit";
import { useCurriculum } from "./curriculum-context";
import { useDispatch } from "react-redux";
import { handleUpdateTitleSection } from "../../redux-toolkit/section/sectionHandlerThunk";
import { useForm } from "react-hook-form";

const Section = ({ sectionLocate, title, sectionId }) => {
  const dispatch = useDispatch();
  const { showEditSection, setShowEditSection } = useCurriculum();
  const { control, watch } = useForm({ defaultValues: { title } });
  const updateTitleSectionHandler = () => {
    const newTitle = watch("title");
    dispatch(handleUpdateTitleSection({ sectionId, newTitle }));
    setShowEditSection(false);
  };
  return (
    <>
      {!showEditSection && (
        <Block
          childrenTitle={
            <h1 className="text-base font-bold">Section {sectionLocate}:</h1>
          }
          title={title}
          onClickPen={() => setShowEditSection(true)}
        ></Block>
      )}
      {showEditSection && (
        <Edit
          control={control}
          inputPlaceholder="Enter a section"
          onClickCancel={() => setShowEditSection(false)}
          childrenTitle={
            <h1 className="flex-shrink-0 text-base font-bold">
              Section {sectionLocate}:
            </h1>
          }
          btnTitle="Save Section"
          submitSave={updateTitleSectionHandler}
        ></Edit>
      )}
    </>
  );
};

export default Section;
