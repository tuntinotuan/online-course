import React, { useState } from "react";
import UserTopContent from "./UserTopContent";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdateUserProfile } from "../../redux-toolkit/user/userHandlerThunk";
import LoadingSpine from "../../components/loading/LoadingSpine";
import { useTranslation } from "react-i18next";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
// import "highlight.js/styles/github.css";
import { IconArrowRight } from "../../components/icon";

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

const UserEditProfile = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("profile");
  const { userData, loadingUser } = useSelector((state) => state.user);
  const [textWithMarkDown, setTextWithMarkDown] = useState(
    userData.description
  );
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
    const newValues = {
      ...values,
      description: textWithMarkDown,
    };
    dispatch(handleUpdateUserProfile(newValues));
  };
  function handleEditorChange({ html, text }) {
    setTextWithMarkDown(text);
  }
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
        <MdEditor
          className="w-full h-[500px]"
          renderHTML={(text) => mdParser.render(text)}
          defaultValue={userData.description}
          onChange={handleEditorChange}
        />
        <Button
          className="flex items-center gap-2 font-bold bg-purpleTextA4 text-white"
          borderNone
          to="/user/me"
        >
          View Me <IconArrowRight></IconArrowRight>
        </Button>
        {/* <ReactMarkdown name="description">{userData.description}</ReactMarkdown> */}
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
