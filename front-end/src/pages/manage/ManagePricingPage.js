import React from "react";
import InstructorManageHeading from "../../modules/instructor/manage/InstructorManageHeading";
import { Input } from "../../components/input";
import Label from "../../components/label/Label";
import { useForm } from "react-hook-form";
import Field from "../../components/field/Field";
import { Button } from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdatePriceCourse } from "../../redux-toolkit/course/courseHandlerThunk";

const ManagePricingPage = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      currentPrice: course.current_price,
      originalPrice: course.original_price,
    },
  });
  const updatePrice = (values) => {
    dispatch(handleUpdatePriceCourse({ courseId: course.id, values }));
  };
  return (
    <div>
      <InstructorManageHeading>Pricing</InstructorManageHeading>
      <div className="w-full text-base p-10">
        <h2 className="font-bold">Set a price for your course</h2>
        <p className="w-2/3">
          Please select the currency and the price tier for your course. If
          you'd like to offer your course for free, it must have a total video
          length of less than 2 hours. Also, courses with practice tests can not
          be free.
        </p>
        <form
          onSubmit={handleSubmit(updatePrice)}
          className="w-1/2 text-sm mt-5"
        >
          <div className="grid grid-cols-2 gap-2">
            <Field>
              <Label htmlFor="currentPrice">Current Price:</Label>
              <Input
                control={control}
                name="currentPrice"
                placeholder="Enter a current price"
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="originalPrice">Original Price:</Label>
              <Input
                control={control}
                name="originalPrice"
                placeholder="Enter a original price"
              ></Input>
            </Field>
          </div>
          <Button
            type="submit"
            className="text-base font-bold text-white bg-primaryBlack !px-4"
            borderNone
            disabled={
              watch("currentPrice") === course.current_price &&
              watch("originalPrice") === course.original_price
            }
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ManagePricingPage;
