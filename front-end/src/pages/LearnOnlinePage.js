import React, { useEffect } from "react";
import Footer from "../components/layout/Footer";
import HeaderLearnOnline from "../components/layout/header-learn-online/HeaderLearnOnline";
import LearnOnlineBody from "../modules/learn-online/LearnOnlineBody";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleGetSingleLearnOnline } from "../redux-toolkit/learn/learnHandlerThunk";
import PageNotFound from "../components/notfound/PageNotFound";

const LearnOnlinePage = () => {
  const dispatch = useDispatch();
  const { singleLearnOnline } = useSelector((state) => state.learn);
  const { courseId } = useParams();
  useEffect(() => {
    dispatch(handleGetSingleLearnOnline(courseId));
  }, [courseId, dispatch]);

  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div>
      <HeaderLearnOnline data={singleLearnOnline}></HeaderLearnOnline>
      {singleLearnOnline ? (
        <LearnOnlineBody data={singleLearnOnline}></LearnOnlineBody>
      ) : (
        <PageNotFound></PageNotFound>
      )}
      <Footer></Footer>
    </div>
  );
};

export default LearnOnlinePage;
