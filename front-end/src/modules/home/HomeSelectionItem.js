import React, { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { CourseList } from "../../components/course";
import { useDispatch, useSelector } from "react-redux";
import { handleGetTopicOfCourse } from "../../redux-toolkit/course/courseHandlerThunk";
import { useParams } from "react-router-dom";
import DataNotFound from "../../components/notfound/DataNotFound";
import { useTranslation } from "react-i18next";
import CourseListSkeleton from "../../components/course/CourseListSkeleton";

const HomeSelectionItem = () => {
  const dispatch = useDispatch();
  const { topicName } = useParams();
  const { t } = useTranslation("home");
  const [page, setPage] = useState(1);
  const { courseList, courseListEnd } = useSelector((state) => state.course);
  const { loading } = useSelector((state) => state.global);
  const newTopic =
    !courseList[0]?.topic?.industry?.name === topicName
      ? courseList[0]?.topic?.name
      : topicName || "React JS";
  const newDescription = courseList[0]?.topic?.description;
  useEffect(() => {
    if (!courseList?.length > 0 || topicName) {
      dispatch(handleGetTopicOfCourse({ topicName }));
      setPage(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicName]);
  const handleCallMoreTopicOfCourses = () => {
    dispatch(handleGetTopicOfCourse({ topicName, page }));
    setPage(page + 1);
  };
  return (
    <div className="p-8 border border-gray-300 dark:border-primaryBlack overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">
        {t("expand")} {newTopic}
      </h1>
      {newDescription && (
        <p className={`preview-text text-base mb-4 max-w-[800px] line-clamp-3`}>
          {newDescription}
        </p>
      )}
      <Button className="font-bold mb-8" to={`/topic/${newTopic}`}>
        {t("explore")} {newTopic}
      </Button>
      {loading && <CourseListSkeleton></CourseListSkeleton>}
      {!loading && courseList?.length > 0 && (
        <CourseList
          data={courseList}
          callApi={handleCallMoreTopicOfCourses}
          apiEnd={courseListEnd}
          restoreBtn={topicName}
        ></CourseList>
      )}
      {!loading && !courseList?.length > 0 && <DataNotFound></DataNotFound>}
    </div>
  );
};

export default HomeSelectionItem;
