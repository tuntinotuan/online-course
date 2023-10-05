import React from "react";
import { Button } from "../../../../components/button";
import Input from "../../../../components/input/Input";
import { useForm } from "react-hook-form";
import { IconClose } from "../../../../components/icon";

const ManagePromotionEdit = ({
  submitForm = () => {},
  onClickClose = () => {},
  btnTitle,
  values,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      coupon: values?.code,
      price: values?.price,
    },
  });
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex items-center gap-1 w-1/2 mt-1 mb-2"
    >
      <Input
        control={control}
        name="coupon"
        placeholder="Enter coupon code"
      ></Input>
      <Input control={control} name="price" placeholder="Enter price"></Input>
      <Button
        type="submit"
        className="flex-shrink-0 !h-auto text-base font-bold text-white bg-purpleTextA4"
        borderNone
      >
        {btnTitle}
      </Button>
      <IconClose onClick={onClickClose}></IconClose>
    </form>
  );
};

export default ManagePromotionEdit;
