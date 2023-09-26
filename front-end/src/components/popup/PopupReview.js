import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowPopupReview } from "../../redux-toolkit/globalSlice";
import CourseStar from "../course/CourseStar";
import Textarea from "../textarea/Textarea";
import Button from "../button/Button";
import { handleCreateReview } from "../../redux-toolkit/review/reviewHanlderThunk";
import LoadingSpin from "../loading/LoadingSpin";

const PopupReview = () => {
  const labels = {
    0.5: "Useless",
    1: "Awful, not what I expected at all",
    1.5: "Awful / Poor",
    2: "Poor, pretty disappointed",
    2.5: "Poor / Average",
    3: "Average, could be better",
    3.5: "Average / Good",
    4: "Good, what I expected",
    4.5: "Good / Amazing",
    5: "Amazing, above expectations!",
  };
  const dispatch = useDispatch();
  const { showPopupReview } = useSelector((state) => state.global);
  const { mySingleReview, reviewLoading } = useSelector(
    (state) => state.review
  );
  const [value, setValue] = useState(-1);
  const [hover, setHover] = useState(-1);
  const [content, setContent] = useState("");
  useEffect(() => {
    setValue(mySingleReview?.rating);
    setContent(mySingleReview?.content);
  }, [mySingleReview?.rating, mySingleReview?.content]);

  const handleClosePopup = () => {
    dispatch(toggleShowPopupReview(false));
  };
  const createReviewHandler = () => {
    dispatch(handleCreateReview({ value, content }));
  };
  return (
    <Popup
      show={showPopupReview}
      onClick={handleClosePopup}
      className="flex flex-col items-center gap-2 w-[600px]"
    >
      <h1 className="text-2xl font-bold mt-6">
        How would you rate this course?
      </h1>
      <p className="font-bold">
        {labels[hover !== -1 ? hover : value] || "Select Rating"}
      </p>
      <CourseStar
        rating={value}
        size={50}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        secondary
      ></CourseStar>
      <Textarea
        className="w-full !h-[150px] dark:bg-darkMain resize-none"
        placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
        defaultValue={mySingleReview?.content || ""}
        onChange={(e) => setContent(e.target.value)}
      ></Textarea>
      <Button
        className="flex items-center justify-center w-[180px] bg-primaryBlack text-white text-base font-bold ml-auto py-3 mt-6"
        borderNone
        onClick={createReviewHandler}
      >
        {reviewLoading && (
          <LoadingSpin size="24px" borderSize="2px"></LoadingSpin>
        )}
        {!reviewLoading && "Save and Continue"}
      </Button>
    </Popup>
  );
};

export default PopupReview;
