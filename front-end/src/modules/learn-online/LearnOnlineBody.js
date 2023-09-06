import React from "react";
import LearnOnlineVideo from "./LearnOnlineVideo";
import LearnOnlineSidebar from "./LearnOnlineSidebar";
import LearnOnlineBelow from "./LearnOnlineBelow";
import { useSelector } from "react-redux";

const LearnOnlineBody = () => {
  const { singleLearnOnline, toggleLearnOnlineSidebar } = useSelector(
    (state) => state.learn
  );
  return (
    <div className="relative flex items-start">
      <div className="w-full">
        <LearnOnlineVideo></LearnOnlineVideo>
        <LearnOnlineBelow></LearnOnlineBelow>
      </div>
      {toggleLearnOnlineSidebar && (
        <LearnOnlineSidebar data={singleLearnOnline} />
      )}
    </div>
  );
};

export default LearnOnlineBody;
