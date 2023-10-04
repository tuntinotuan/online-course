import React, { useState } from "react";
import Block from "./Block";
import { IconArrowDown } from "../icon";
import Edit from "./Edit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  handleDeleteLecture,
  handleUpdateTitleLecture,
} from "../../redux-toolkit/lecture/lectureHandlerThunk";
import Swal from "sweetalert2";

const Lecture = ({ title, videoLocate, children, lectureId }) => {
  const dispatch = useDispatch();
  const [showChildren, setShowChildren] = useState(false);
  const [showEditLecture, setShowEditLecture] = useState(false);
  const { control, watch } = useForm({ defaultValues: { title } });
  const updateTitleLectureHandler = () => {
    const newTitle = watch("title");
    dispatch(handleUpdateTitleLecture({ lectureId, newTitle }));
    setShowEditLecture(false);
  };
  const deleteLectureHandler = () => {
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
        dispatch(handleDeleteLecture({ lectureId }));
      }
    });
  };
  return (
    <div className="mb-2">
      {!showEditLecture && (
        <>
          <Block
            childrenTitle={<h2>Lecture {videoLocate}:</h2>}
            title={title}
            className="border border-primaryBlack bg-white ml-16 mr-2 !py-3"
            onClickPen={() => setShowEditLecture(true)}
            onClickTrash={deleteLectureHandler}
          >
            <IconArrowDown
              onClick={() => setShowChildren(!showChildren)}
              size={16}
              stroke={3}
            ></IconArrowDown>
          </Block>
          {showChildren && (
            <div className="border border-x-primaryBlack border-b-primaryBlack bg-white ml-16 mr-2 p-2">
              {children}
            </div>
          )}
        </>
      )}
      {showEditLecture && (
        <Edit
          className="ml-16 mr-2"
          control={control}
          childrenTitle={
            <h2 className="flex-shrink-0">Lecture {videoLocate}:</h2>
          }
          inputPlaceholder="Enter a lecture"
          defaultValue={title}
          btnTitle="Save Lecture"
          onClickCancel={() => setShowEditLecture(false)}
          submitSave={updateTitleLectureHandler}
        ></Edit>
      )}
    </div>
  );
};

export default Lecture;
