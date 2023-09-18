import React, { useEffect } from "react";
import { Button } from "../../components/button";
import { CourseList } from "../../components/course";
import { useDispatch, useSelector } from "react-redux";
import { handleGetTopicOfCourse } from "../../redux-toolkit/course/courseHandlerThunk";
import { useParams } from "react-router-dom";
import DataNotFound from "../../components/notfound/DataNotFound";
import { useTranslation } from "react-i18next";

const HomeSelectionItem = () => {
  const dispatch = useDispatch();
  const { topicName } = useParams();
  const { t } = useTranslation("home");
  const { courseList } = useSelector((state) => state.course);
  const { loading } = useSelector((state) => state.global);
  const newTopic =
    !courseList[0]?.topic?.industry?.name === topicName
      ? courseList[0]?.topic?.name
      : topicName || "Unity";
  const newDescription = courseList[0]?.topic?.description;
  useEffect(() => {
    dispatch(handleGetTopicOfCourse({ topicName }));
  }, [topicName, dispatch]);
  return (
    <div className="p-8 border border-slate-200 overflow-hidden">
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
      <CourseList data={courseList}></CourseList>
      {!loading && !courseList.length > 0 && <DataNotFound></DataNotFound>}
    </div>
  );
};

export default HomeSelectionItem;
