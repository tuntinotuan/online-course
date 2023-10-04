import React from "react";
import Block from "./Block";
import Edit from "./Edit";
import { useCurriculum } from "./curriculum-context";
import { useDispatch } from "react-redux";
import {
  handleDeleteSection,
  handleUpdateTitleSection,
} from "../../redux-toolkit/section/sectionHandlerThunk";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Section = ({ sectionLocate, title, sectionId }) => {
  const dispatch = useDispatch();
  const { showEditSection, setShowEditSection } = useCurriculum();
  const { control, watch } = useForm({ defaultValues: { title } });
  const updateTitleSectionHandler = () => {
    const newTitle = watch("title");
    dispatch(handleUpdateTitleSection({ sectionId, newTitle }));
    setShowEditSection(false);
  };
  const deleteSectionHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      imageWidth: 100,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(handleDeleteSection(sectionId));
      }
    });
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
          onClickTrash={deleteSectionHandler}
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
