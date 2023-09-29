import React from "react";
import InstructorCreateHeader from "../../modules/instructor/create/InstructorCreateHeader";
import InstructorCreateFooter from "../../modules/instructor/create/InstructorCreateFooter";
import InstructorCreateBody from "../../modules/instructor/create/InstructorCreateBody";
import { useNavigate, useParams } from "react-router-dom";
import InstructorCreateStep1 from "../../modules/instructor/create/step/InstructorCreateStep1";
import InstructorCreateStep2 from "../../modules/instructor/create/step/InstructorCreateStep2";
import InstructorCreateStep3 from "../../modules/instructor/create/step/InstructorCreateStep3";
import InstructorCreateStep4 from "../../modules/instructor/create/step/InstructorCreateStep4";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleCreateCourse } from "../../redux-toolkit/course/courseHandlerThunk";

const InstructorCreateCoursePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { stepId } = useParams();
  const stepTo = "/course/create/";
  const { control, watch, setValue, getValues } = useForm();
  const renderBody = () => {
    switch (Number(stepId)) {
      case 1:
        return <InstructorCreateStep1></InstructorCreateStep1>;
      case 2:
        return (
          <InstructorCreateStep2 control={control}></InstructorCreateStep2>
        );
      case 3:
        return (
          <InstructorCreateStep3
            watch={watch}
            setValue={setValue}
          ></InstructorCreateStep3>
        );
      case 4:
        return <InstructorCreateStep4></InstructorCreateStep4>;
      default:
        break;
    }
  };
  const renderFooterBtn = () => {
    switch (Number(stepId)) {
      case 1:
        return <ButtonStepContinue to={`${stepTo}2`} />;
      case 2:
        return (
          <>
            <ButtonStepPrevious to={`${stepTo}1`} />
            <ButtonStepContinue
              to={`${stepTo}3`}
              disabled={watch("titleCreation") === ""}
            />
          </>
        );
      case 3:
        return (
          <>
            <ButtonStepPrevious to={`${stepTo}2`} />
            <ButtonStepContinue to={`${stepTo}4`} />
          </>
        );
      case 4:
        return (
          <>
            <ButtonStepPrevious to={`${stepTo}3`} />
            <ButtonStepContinue onClick={createCourseHandler}>
              Create Course
            </ButtonStepContinue>
          </>
        );
      default:
        break;
    }
  };
  const createCourseHandler = () => {
    console.log("title", getValues("titleCreation"));
    console.log("id", getValues("topicId"));
    const values = {
      title: getValues("titleCreation"),
      topicId: getValues("topicId"),
      navigate,
    };
    dispatch(handleCreateCourse(values));
  };
  return (
    <>
      <InstructorCreateHeader step={Number(stepId)}></InstructorCreateHeader>
      <InstructorCreateBody>{renderBody()}</InstructorCreateBody>
      <InstructorCreateFooter>{renderFooterBtn()}</InstructorCreateFooter>
    </>
  );
};

function ButtonStepPrevious({ to }) {
  return (
    <Button className="text-base font-bold" to={to}>
      Previous
    </Button>
  );
}
function ButtonStepContinue({ to, children, ...props }) {
  return (
    <Button
      className="text-base font-bold bg-primaryBg text-white"
      borderNone
      to={to}
      {...props}
    >
      {children || "Continue"}
    </Button>
  );
}

export default InstructorCreateCoursePage;
