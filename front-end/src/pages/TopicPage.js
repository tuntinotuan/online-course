import React, { useEffect } from "react";
import { CourseList } from "../components/course";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetTopicOfCourse } from "../redux-toolkit/course/courseHandlerThunk";
import DataNotFound from "../components/notfound/DataNotFound";
import MenuBorderBottom from "../components/layout/MenuBorderBottom";
import CourseLayoutHeading from "../components/layout/CourseLayoutHeading";
import InstructorList from "../components/instructor/InstructorList";
import { handleGetAuthorList } from "../redux-toolkit/author/authorHandlerThunk";
import { useTranslation } from "react-i18next";

const TopicPage = () => {
  const { topicName } = useParams();
  const [param] = useSearchParams();
  const filter = param.get("filter");
  const dispatch = useDispatch();
  const { t } = useTranslation("category");
  const { courseList } = useSelector((state) => state.course);
  const { loading } = useSelector((state) => state.global);
  const { authorList } = useSelector((state) => state.author);
  useEffect(() => {
    dispatch(handleGetTopicOfCourse({ topicName, filter }));
    dispatch(handleGetAuthorList());
  }, [topicName, filter, dispatch]);
  return (
    <div className="page-container py-10">
      <h1 className="text-3xl font-bold">{`“${topicName}”`} Courses</h1>
      {courseList.length > 0 && (
        <>
          <h2 className="text-2xl font-bold my-5">
            {t("courses to get you started")}
          </h2>
          <MenuBorderBottom></MenuBorderBottom>
          <CourseList data={courseList}></CourseList>
        </>
      )}
      {!loading && !courseList.length > 0 && <DataNotFound></DataNotFound>}
      <CourseLayoutHeading title={t("popular instructors")}>
        <InstructorList data={authorList}></InstructorList>
      </CourseLayoutHeading>
    </div>
  );
};

export default TopicPage;
