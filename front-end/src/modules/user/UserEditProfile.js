import React from "react";
import UserTopContent from "./UserTopContent";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { handleUpdateUserProfile } from "../../redux-toolkit/user/userHandlerThunk";
import LoadingSpine from "../../components/loading/LoadingSpine";

const UserEditProfile = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: userData.username,
      address: userData.address,
      phone: userData.phonenumber,
      birthDay: userData.birthday,
    },
  });
  const editProfileHandler = (values) => {
    if (!isValid) return;
    dispatch(handleUpdateUserProfile(values));
  };
  return (
    <div>
      <UserTopContent
        title="Public profile"
        sub="Add information about yourself"
      ></UserTopContent>
      <form
        onSubmit={handleSubmit(editProfileHandler)}
        className="max-w-[600px] mx-auto flex flex-col items-start gap-2 py-5"
      >
        <h3 className="font-bold">Basics:</h3>
        <Input
          control={control}
          name="fullname"
          placeholder="Fullname"
          size={36}
        ></Input>
        <Input
          control={control}
          name="address"
          placeholder="Address"
          size={36}
        ></Input>
        <Input
          control={control}
          name="phone"
          placeholder="Phone Number"
          size={36}
        ></Input>
        <Input
          control={control}
          name="birthDay"
          type="date"
          placeholder="Birth Day"
          size={36}
        ></Input>
        <ReactMarkdown
          name="description"
          children={userData.description}
        ></ReactMarkdown>
        <Button
          type="submit"
          className="bg-primaryBlack text-white font-bold py-4 px-6 mt-5"
          borderNone
        >
          {isSubmitting ? (
            <LoadingSpine size="24px" borderSize="2px"></LoadingSpine>
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </div>
  );
};

export default UserEditProfile;
