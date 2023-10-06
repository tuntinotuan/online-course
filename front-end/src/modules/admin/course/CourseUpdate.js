import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Field from "../../../components/field/Field";
import Input from "../../../components/input/Input";
import { useForm } from "react-hook-form";
import Label from "../../../components/label/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetSingleCourse,
  handleUpdateCourse,
} from "../../../redux-toolkit/course/courseHandlerThunk";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
import InputSelectImage from "../../../components/input/InputSelectImage";
import Button from "../../../components/button/Button";
import LoadingSpin from "../../../components/loading/LoadingSpin";
import { strapiPathBE } from "../../../utils/constants";
import DropdownTopic from "../../../components/dropdown/DropdownTopic";
import DropdownStatus from "../../../components/dropdown/DropdownStatus";
import AdminHeadingWithBack from "../AdminHeadingWithBack";

const mdParser = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ""; // use external default escaping
  },
});

const CourseUpdate = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [urlChosenImage, setUrlChosenImage] = useState();
  const { course, loadingUpdateCourse, loadingUpdateCourseSkeleton } =
    useSelector((state) => state.course);
  const { control, reset, setValue, watch, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  useEffect(() => {
    dispatch(handleGetSingleCourse({ courseId, reset, setValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, reset]);
  const updateCourseHandler = (values) => {
    const newValues = {
      ...values,
    };
    dispatch(handleUpdateCourse({ courseId, newValues, urlChosenImage }));
  };
  function handleEditorChange({ html, text }) {
    setValue("description", text);
  }
  return (
    <div>
      <AdminHeadingWithBack
        title="Update course"
        to="/admin/course"
      ></AdminHeadingWithBack>
      {loadingUpdateCourseSkeleton && <UpdateSkeleton></UpdateSkeleton>}
      {!loadingUpdateCourseSkeleton && course && (
        <form className="w-full" onSubmit={handleSubmit(updateCourseHandler)}>
          <div className="grid grid-cols-2 gap-x-10">
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input
                control={control}
                name="title"
                placeholder="Please enter your course title..."
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="subTitle">Subtitle</Label>
              <Input
                control={control}
                name="subTitle"
                placeholder="Please enter your sub subtitle..."
              ></Input>
            </Field>
            <Field>
              <Label>Description</Label>
              <MdEditor
                className="w-full h-[250px]"
                defaultValue={watch("description")}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
              />
            </Field>
            <Field>
              <Label>Overview Image</Label>
              <InputSelectImage
                url={
                  urlChosenImage
                    ? urlChosenImage?.preview
                    : `${strapiPathBE}${course.overview_image?.url}`
                }
                setUrlChosenImage={setUrlChosenImage}
              ></InputSelectImage>
            </Field>
            <Field>
              <Label>Current / Original Price</Label>
              <Input
                control={control}
                type="number"
                name="currentPrice"
                placeholder="Current price of course..."
              ></Input>
              <Input
                control={control}
                type="number"
                name="originalPrice"
                placeholder="Original price of course..."
              ></Input>
            </Field>
            <Field>
              <Label>Topic / Star</Label>
              {/* <Dropdown
                onChange={handleSearchDropdownTopic}
                placeholder={watch("topic")}
              >
                <Dropdown.Search></Dropdown.Search>
                {allTopics?.map(
                  (topic) =>
                    topic.name !== watch("topic") && (
                      <Dropdown.Option
                        onClick={() => {
                          setValue("topic", topic?.name);
                          setValue("topicId", topic?.id);
                          handleSearchDropdownTopic();
                        }}
                      >
                        {topic?.name}
                      </Dropdown.Option>
                    )
                )}
              </Dropdown> */}
              <DropdownTopic watch={watch} setValue={setValue}></DropdownTopic>
              <Input
                control={control}
                name="star"
                placeholder="star"
                className="opacity-60 cursor-wait"
                disabled
              ></Input>
            </Field>
            <Field>
              <Label>Status</Label>
              <DropdownStatus
                currentStatus={watch("status")}
                setValue={setValue}
              ></DropdownStatus>
            </Field>
            <Field></Field>
            <Field>
              <Label>Video Intro</Label>
            </Field>
            <Field></Field>
            <Field>
              <Label>Video Lists</Label>
            </Field>
          </div>
          <Button
            type="submit"
            className="flex items-center justify-center w-[150px] bg-primaryBg text-white font-bold !py-4 !px-5 mx-auto"
            borderNone
          >
            {loadingUpdateCourse && (
              <LoadingSpin size="22px" borderSize="1px"></LoadingSpin>
            )}
            {!loadingUpdateCourse && "Update course"}
          </Button>
        </form>
      )}
    </div>
  );
};

function UpdateSkeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="grid grid-cols-2 gap-x-10">
        <Field>
          <Label htmlFor="title">Title</Label>
          <div className="w-full h-10 bg-grayA6"></div>
        </Field>
        <Field>
          <Label htmlFor="subTitle">Subtitle</Label>
          <div className="w-full h-10 bg-grayA6"></div>
        </Field>
        <Field>
          <Label>Description</Label>
          {Array(5)
            .fill()
            .map((item) => (
              <div className="w-full h-4 bg-grayA6"></div>
            ))}
          {Array(3)
            .fill()
            .map((item) => (
              <div className="w-1/2 h-4 bg-grayA6"></div>
            ))}
          {Array(2)
            .fill()
            .map((item) => (
              <div className="w-1/3 h-4 bg-grayA6"></div>
            ))}
        </Field>
        <Field>
          <Label>Overview Image</Label>
          <InputSelectImage></InputSelectImage>
        </Field>
        <Field>
          <Label>Current / Original Price</Label>
          <div className="w-full h-10 bg-grayA6"></div>
          <div className="w-full h-10 bg-grayA6"></div>
        </Field>
        <Field>
          <Label>Star / Topic</Label>
          <div className="w-full h-10 bg-grayA6"></div>
          <div className="w-full h-10 bg-grayA6"></div>
        </Field>
      </div>
    </div>
  );
}

export default CourseUpdate;
