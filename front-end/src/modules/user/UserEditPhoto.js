import React, { useState } from "react";
import UserTopContent from "./UserTopContent";
import { Button } from "../../components/button";
import Image from "../../components/image/Image";
import { InputSelectFile } from "../../components/input";
import { useDispatch, useSelector } from "react-redux";
import { strapiPathBE } from "../../utils/constants";
import { useForm } from "react-hook-form";
import { handleUpdateUserAvatar } from "../../redux-toolkit/user/userHandlerThunk";
import LoadingSpin from "../../components/loading/LoadingSpin";
import { useTranslation } from "react-i18next";

const UserEditPhoto = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("profile");
  const { userData, loadingUser } = useSelector((state) => state.user);
  const [urlChosenImage, setUrlChosenImage] = useState();
  // const { urlChosenImage } = useSelector((state) => state.global);
  const { avatar, url_google_avatar } = userData;
  const { handleSubmit } = useForm({ mode: "onChange" });
  const handleChosenAvatarImage = () => {
    dispatch(handleUpdateUserAvatar(urlChosenImage));
  };
  return (
    <div>
      <UserTopContent
        title={t("photo")}
        sub={t("add a nice photo of yourself for your profile.")}
      ></UserTopContent>
      <form
        onSubmit={handleSubmit(handleChosenAvatarImage)}
        className="max-w-[600px] mx-auto py-6"
      >
        <h3 className="font-bold">{t("image preview")}</h3>
        <div className="border border-primaryBlack p-4 mt-2 mb-4">
          <div className="flex items-center justify-center mx-auto bg-grayF7 dark:bg-purpleTextDC">
            <div className="h-52 w-52">
              <Image
                url={
                  urlChosenImage
                    ? urlChosenImage.preview
                    : avatar
                    ? `${strapiPathBE}${avatar?.url}`
                    : url_google_avatar || `/user-image.png 2x`
                }
                className="border-none"
              ></Image>
            </div>
          </div>
        </div>
        <h3 className="font-bold mb-2">{t("add change image")}</h3>
        <InputSelectFile
          name="files"
          urlChosenImage={urlChosenImage}
          setUrlChosenImage={setUrlChosenImage}
        ></InputSelectFile>
        <Button
          type="submit"
          className="flex items-center justify-center w-[90px] bg-primaryBlack text-white font-bold py-4 px-6 mt-8"
          borderNone
          disabled={loadingUser || !urlChosenImage}
        >
          {loadingUser ? (
            <LoadingSpin size="24px" borderSize="2px"></LoadingSpin>
          ) : (
            t("save")
          )}
        </Button>
      </form>
    </div>
  );
};

export default UserEditPhoto;
