import React from "react";
import UserTopContent from "./UserTopContent";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { handleUpdateUserProfile } from "../../redux-toolkit/user/userHandlerThunk";
import LoadingSpine from "../../components/loading/LoadingSpine";
import { useTranslation } from "react-i18next";

const UserEditProfile = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("profile");
  const { userData, loadingUser } = useSelector((state) => state.user);
  const {
    control,
    handleSubmit,
    formState: { isValid },
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
        title={t("public profile")}
        sub={t("add information about yourself")}
      ></UserTopContent>
      <form
        onSubmit={handleSubmit(editProfileHandler)}
        className="max-w-[600px] mx-auto flex flex-col items-start gap-2 py-5"
      >
        <h3 className="font-bold">{t("basics")}:</h3>
        <Input
          control={control}
          name="fullname"
          placeholder={t("full name")}
          size={36}
        ></Input>
        <Input
          control={control}
          name="address"
          placeholder={t("address")}
          size={36}
        ></Input>
        <Input
          control={control}
          name="phone"
          placeholder={t("phone number")}
          size={36}
        ></Input>
        <Input
          control={control}
          name="birthDay"
          type="date"
          placeholder="Birth Day"
          size={36}
          className="!w-[150px]"
        ></Input>
        <ReactMarkdown
          name="description"
          children={userData.description}
        ></ReactMarkdown>
        <Button
          type="submit"
          className="flex items-center justify-center w-[90px] bg-primaryBlack text-white font-bold py-4 px-6 mt-5"
          borderNone
          disabled={loadingUser}
        >
          {loadingUser ? (
            <LoadingSpine size="22px" borderSize="2px"></LoadingSpine>
          ) : (
            t("save")
          )}
        </Button>
      </form>
    </div>
  );
};

export default UserEditProfile;
