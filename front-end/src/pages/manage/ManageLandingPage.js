import React, { useEffect, useState } from "react";
import InstructorManageHeading from "../../modules/instructor/manage/InstructorManageHeading";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { useForm } from "react-hook-form";
import MdEditor from "react-markdown-editor-lite";
import Field from "../../components/field/Field";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import DropdownTopic from "../../components/dropdown/DropdownTopic";
import Image from "../../components/image/Image";
import InputSelectFile from "../../components/input/InputSelectFile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  handleGetSingleCourse,
  handleUpdateCourse,
} from "../../redux-toolkit/course/courseHandlerThunk";
import { strapiPathBE } from "../../utils/constants";
import { Button } from "../../components/button";

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

const ManageLandingPage = () => {
  const [loadVideo, setLoadVideo] = useState();
  const [urlChosenImage, setUrlChosenImage] = useState();
  const [urlChosenVideo, setUrlChosenVideo] = useState();
  const { course, loadingUpdateCourseSkeleton } = useSelector(
    (state) => state.course
  );
  const { control, watch, setValue, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    dispatch(handleGetSingleCourse({ courseId, reset, setValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);
  function handleEditorChange({ html, text }) {
    setValue("description", text);
  }
  const updateCourse = (values) => {
    console.log("urlChosenImage", urlChosenImage);
    console.log("urlChosenVideo", urlChosenVideo);
    const newValues = { ...values };
    dispatch(
      handleUpdateCourse({
        courseId,
        newValues,
        urlChosenImage,
        urlChosenVideo,
      })
    );
  };
  useEffect(() => {
    if (urlChosenVideo) {
      setLoadVideo(true);
      setTimeout(() => {
        setLoadVideo(false);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlChosenVideo]);

  return (
    <>
      {!loadingUpdateCourseSkeleton && (
        <>
          <InstructorManageHeading>Course landing page</InstructorManageHeading>
          <form onSubmit={handleSubmit(updateCourse)} className="p-10">
            <Field>
              <Label htmlFor="title">Course title</Label>
              <Input
                control={control}
                placeholder="Insert your course title."
                name="title"
                size={36}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="subTitle">Course subtitle</Label>
              <Input
                control={control}
                placeholder="Insert your course subtitle."
                name="subTitle"
                size={36}
              ></Input>
            </Field>
            <Field>
              <Label>Course description</Label>
              <MdEditor
                className="w-full h-[250px]"
                defaultValue={watch("description")}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
              />
            </Field>
            <Field>
              <Label>Basic info</Label>
              <DropdownTopic
                watch={watch}
                setValue={setValue}
                placeholder="Choose a topic"
              ></DropdownTopic>
            </Field>
            <Field>
              <Label>Course image</Label>
              <div className="grid grid-cols-2 w-full gap-4">
                <div className="">
                  <Image
                    url={
                      (urlChosenImage && urlChosenImage.preview) ||
                      (course?.overview_image &&
                        `${strapiPathBE}${course?.overview_image?.url}`) ||
                      "https://s.udemycdn.com/course/750x422/placeholder.jpg"
                    }
                  ></Image>
                </div>
                <InputSelectFile
                  typeImage
                  setUrlChosenImage={setUrlChosenImage}
                ></InputSelectFile>
              </div>
            </Field>
            <Field>
              <Label>Promotional video</Label>
              <div className="grid grid-cols-2 w-full gap-4">
                {!loadVideo &&
                  (urlChosenVideo || course?.video_intro?.video) && (
                    <video
                      controls
                      autoPlay
                      width="100%"
                      height="100%"
                      className="border border-gray-600 dark:border-primaryBlack"
                    >
                      <source
                        src={
                          urlChosenVideo?.preview ||
                          `${strapiPathBE}${course?.video_intro?.video?.url}`
                        }
                        type="video/mp4"
                      />
                      Sorry, your browser doesn't support embedded videos.
                    </video>
                  )}
                {!urlChosenVideo && !course?.video_intro?.video && (
                  <Image
                    url={
                      "https://s.udemycdn.com/course/750x422/placeholder.jpg"
                    }
                  ></Image>
                )}
                <InputSelectFile
                  setUrlChosenImage={setUrlChosenVideo}
                ></InputSelectFile>
              </div>
            </Field>
            <Button
              type="submit"
              className="fixed top-2 right-14 font-bold bg-white px-6 z-50"
              borderNone
            >
              Save
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default ManageLandingPage;
