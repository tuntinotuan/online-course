import React from "react";
import InstructorManageHeading from "../../modules/instructor/manage/InstructorManageHeading";
import ManageCurriculumList from "../../modules/instructor/manage/curriculum/ManageCurriculumList";
import { useSelector } from "react-redux";

const ManageCurriculumPage = () => {
  const { course } = useSelector((state) => state.course);
  const { video_lists } = course;
  return (
    <div>
      <InstructorManageHeading>Curriculum</InstructorManageHeading>
      <section className="flex flex-col gap-10 p-10">
        <ManageCurriculumList data={video_lists}></ManageCurriculumList>
      </section>
    </div>
  );
};

export default ManageCurriculumPage;
