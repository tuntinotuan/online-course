import React from "react";
import InstructorManageHeading from "../../modules/instructor/manage/InstructorManageHeading";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/button";
import Swal from "sweetalert2";
import { strapiPathBE } from "../../utils/constants";
import { handleDeleteCourse } from "../../redux-toolkit/course/courseHandlerThunk";
import { useNavigate } from "react-router-dom";

const ManageSettingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.course);
  const deleteCourse = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      imageUrl: `${strapiPathBE}${course?.overview_image?.url}`,
      imageWidth: 100,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(handleDeleteCourse({ courseId: course.id, navigate }));
      }
    });
  };
  return (
    <>
      <InstructorManageHeading>Settings</InstructorManageHeading>
      <div className="text-base border border-transparent border-b-gray-300 p-10">
        <h2 className="font-bold">Course Status</h2>
        <p>This course is {course.status} on the Udemy marketplace.</p>
        <div className="flex items-start gap-5 mt-5">
          <Button
            className="w-[200px] text-sm font-bold !py-1"
            onClick={deleteCourse}
          >
            Delete
          </Button>
          <span>
            We promise students lifetime access, so courses cannot be deleted
            after students have enrolled.
          </span>
        </div>
      </div>
    </>
  );
};

export default ManageSettingPage;
