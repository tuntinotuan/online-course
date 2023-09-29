import React from "react";
import { Link } from "react-router-dom";
import LogoUdemy from "../../../components/logo/LogoUdemy";

const InstructorCreateHeader = ({ step }) => {
  let widthStep = "";
  switch (step) {
    case 1:
      widthStep = "w-1/4";
      break;
    case 2:
      widthStep = "w-1/2";
      break;
    case 3:
      widthStep = "w-3/4";
      break;
    case 4:
      widthStep = "w-full";
      break;
    default:
      break;
  }
  return (
    <header>
      <div className="flex px-6">
        <LogoUdemy></LogoUdemy>
        <div className="flex items-center justify-between w-full border border-transparent border-l-gray-300 pl-6 ml-6">
          <span className="text-lg">Step {step} of 4</span>
          <Link
            to="/instructor/courses"
            className="text-base font-bold text-purpleText56"
          >
            Exit
          </Link>
        </div>
      </div>
      <div className="w-full h-1 bg-purpleTextDC">
        <div
          className={`h-full bg-purpleText56 transition-all ${widthStep}`}
        ></div>
      </div>
    </header>
  );
};

export default InstructorCreateHeader;
