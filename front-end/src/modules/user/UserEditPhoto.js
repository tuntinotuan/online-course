import React, { useState } from "react";
import UserTopContent from "./UserTopContent";
import { Button } from "../../components/button";
import Image from "../../components/image/Image";
import { InputSelectFile } from "../../components/input";
import { useDispatch, useSelector } from "react-redux";
import { strapiPathBE } from "../../utils/constants";
import { useForm } from "react-hook-form";
import { handleUpdateUserAvatar } from "../../redux-toolkit/user/userHandlerThunk";

const UserEditPhoto = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [urlChosenImage, setUrlChosenImage] = useState();
  // const { urlChosenImage } = useSelector((state) => state.global);
  const { avatar } = userData;
  const { handleSubmit } = useForm({ mode: "onChange" });
  const handleChosenAvatarImage = () => {
    dispatch(handleUpdateUserAvatar(urlChosenImage));
  };
  return (
    <div>
      <UserTopContent
        title="Photo"
        sub="Add a nice photo of yourself for your profile."
      ></UserTopContent>
      <form
        onSubmit={handleSubmit(handleChosenAvatarImage)}
        className="max-w-[600px] mx-auto py-6"
      >
        <h3 className="font-bold">Image preview</h3>
        <div className="border border-primaryBlack p-4 mt-2 mb-4">
          <div className="flex items-center justify-center mx-auto bg-grayF7">
            <div className="h-52 w-52">
              <Image
                url={
                  urlChosenImage
                    ? urlChosenImage.preview
                    : avatar
                    ? `${strapiPathBE}${avatar?.url}`
                    : `/user-image.png 2x`
                }
                className="border-none"
              ></Image>
            </div>
          </div>
        </div>
        <h3 className="font-bold mb-2">Add / Change Image</h3>
        <InputSelectFile
          name="files"
          urlChosenImage={urlChosenImage}
          setUrlChosenImage={setUrlChosenImage}
        ></InputSelectFile>
        <Button
          type="submit"
          className="bg-primaryBlack text-white font-bold py-4 px-6 mt-8"
          borderNone
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserEditPhoto;
