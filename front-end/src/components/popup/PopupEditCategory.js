import React, { useEffect } from "react";
import Popup from "./Popup";
import Label from "../label/Label";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import Button from "../button/Button";

const PopupEditCategory = ({
  data,
  submitSave = () => {},
  show,
  onClose = () => {},
}) => {
  const { control, handleSubmit, reset, watch } = useForm({
    mode: "onSubmit",
  });
  useEffect(() => {
    reset({ name: data?.name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Popup show={show} onClick={onClose}>
      <Label>Edit for ”{data?.name}”</Label>
      <form
        onSubmit={handleSubmit(submitSave)}
        className="flex items-center gap-2 mt-2"
      >
        <Input control={control} name="name" placeholder="Enter a name"></Input>
        <Button
          type="submit"
          className="text-base font-bold text-white bg-purpleTextA4 ml-auto"
          borderNone
          disabled={watch("name") === data?.name || watch("name")?.length < 5}
        >
          Save
        </Button>
      </form>
    </Popup>
  );
};

export default PopupEditCategory;
