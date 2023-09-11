import React, { useEffect } from "react";
import { Button } from "../../components/button";
import { CourseList } from "../../components/course";
import { useDispatch, useSelector } from "react-redux";
import { handleGetTopicOfCourse } from "../../redux-toolkit/course/courseHandlerThunk";
import { useParams } from "react-router-dom";
import DataNotFound from "../../components/notfound/DataNotFound";

const HomeSelectionItem = () => {
  const dispatch = useDispatch();
  const { topicName } = useParams();
  const { courseList } = useSelector((state) => state.course);
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
        Expand your career opportunities with {newTopic}
      </h1>
      {newDescription && (
        <p className={`preview-text text-base mb-4 max-w-[800px] line-clamp-3`}>
          {newDescription}
        </p>
      )}
      <Button className="font-bold mb-8">Explore {newTopic}</Button>
      {courseList.length > 0 ? (
        <CourseList data={courseList}></CourseList>
      ) : (
        <DataNotFound></DataNotFound>
      )}
    </div>
  );
};

export default HomeSelectionItem;
