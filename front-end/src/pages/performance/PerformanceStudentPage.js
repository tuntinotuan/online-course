import React, { useEffect } from "react";
import { handleGetStudentPurchasedCourses } from "../../redux-toolkit/purchased/purchasedHandlerThunk";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../components/dropdown/Dropdown";
import ButtonUserAvatar from "../../components/button/ButtonUserAvatar";
import { strapiPathBE } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const PerformanceStudentPage = () => {
  const dispatch = useDispatch();
  const [param] = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterByCourse = param.get("filter-course");
  const { myStudents } = useSelector((state) => state.purchased);
  const { myCourses } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(handleGetStudentPurchasedCourses({ filterByCourse }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByCourse]);
  const onClickOption = (courseId) => {
    if (courseId === Number(filterByCourse)) {
      searchParams.delete("filter-course");
    } else {
      searchParams.set("filter-course", courseId);
    }
    setSearchParams(searchParams);
  };
  return (
    <div className="w-full px-12">
      <h1 className="text-3xl font-bold">Students</h1>
      <div className="w-[200px] my-5">
        <Dropdown placeholder="All Courses">
          {myCourses?.map((course) => (
            <Dropdown.Option
              onClick={() => onClickOption(course.id)}
              active={course.id === Number(filterByCourse)}
            >
              {course.title}
            </Dropdown.Option>
          ))}
        </Dropdown>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {myStudents?.map((student) => (
          <div className="flex items-start gap-2 w-full border border-gray-300 rounded-md p-4">
            <ButtonUserAvatar
              className="flex-shrink-0"
              size={50}
              shortName={student?.user?.username}
              avatar={
                (student?.user?.avatar &&
                  `${strapiPathBE}${student?.user?.avatar?.url}`) ||
                student?.user?.url_google_avatar
              }
            ></ButtonUserAvatar>
            <div>
              <h1 className="font-bold">{student?.user?.username}</h1>
              <p
                title={student?.user?.email}
                className="max-w-[120px] text-xs truncate"
              >
                {student?.user?.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceStudentPage;
