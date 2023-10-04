import React, { useState } from "react";
import { Curriculum } from "../../../../components/curriculum";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "../../../../components/button";
import { IconPlus } from "../../../../components/icon";
import Edit from "../../../../components/curriculum/Edit";
import { handleCreateNewLecture } from "../../../../redux-toolkit/lecture/lectureHandlerThunk";

const ManageCurriculumItem = ({ section, sectionLocate }) => {
  const dispatch = useDispatch();
  const [showNewLecture, setShowNewLecture] = useState(false);
  const { control, watch } = useForm();
  const createSectionHandler = () => {
    const newTitle = watch("title");
    const sectionId = section.id;
    dispatch(handleCreateNewLecture({ newTitle, sectionId }));
    setShowNewLecture(false);
  };
  return (
    <Curriculum>
      <Curriculum.Section
        title={section.lesson}
        sectionLocate={sectionLocate}
        sectionId={section.id}
      ></Curriculum.Section>
      {section?.video_courses?.map((video, index) => (
        <Curriculum.Lecture
          title={video.title}
          videoLocate={index + 1}
          lectureId={video.id}
        >
          <Curriculum.Resources>
            <Curriculum.Video
              nameFile={video?.video?.name}
              videoId={video.id}
              preview={video.preview}
            ></Curriculum.Video>
          </Curriculum.Resources>
        </Curriculum.Lecture>
      ))}
      <div className="relative ml-16">
        <Button
          className={`flex items-center gap-1 font-bold !py-1 ${
            showNewLecture ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          onClick={() => setShowNewLecture(true)}
        >
          <IconPlus></IconPlus>Curriculum Item
        </Button>
        <IconPlus
          className={`absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-500 ${
            showNewLecture
              ? "opacity-100 visible -translate-x-2/3 -rotate-[135deg]"
              : "opacity-0 invisible"
          }`}
          onClick={() => setShowNewLecture(false)}
        ></IconPlus>
      </div>
      {showNewLecture && (
        <Edit
          control={control}
          className="ml-16"
          childrenTitle={
            <h1 className="flex-shrink-0 text-base font-bold">New Lecture:</h1>
          }
          inputPlaceholder="Enter a title"
          onClickCancel={() => setShowNewLecture(false)}
          btnTitle="Add Lecture"
          submitSave={createSectionHandler}
        ></Edit>
      )}
    </Curriculum>
  );
};

export default ManageCurriculumItem;
