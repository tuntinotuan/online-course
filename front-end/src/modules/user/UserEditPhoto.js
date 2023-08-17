import React from "react";
import UserTopContent from "./UserTopContent";
import { Button } from "../../components/button";
import Image from "../../components/image/Image";
import { InputSelectFile } from "../../components/input";
import { useSelector } from "react-redux";
import { strapiPathBE } from "../../utils/constants";

const UserEditPhoto = () => {
  const { userData } = useSelector((state) => state.user);
  const { avatar } = userData;
  return (
    <div>
      <UserTopContent
        title="Photo"
        sub="Add a nice photo of yourself for your profile."
      ></UserTopContent>
      <div className="max-w-[600px] mx-auto py-6">
        <h3 className="font-bold">Image preview</h3>
        <div className="border border-primaryBlack p-4 mt-2 mb-4">
          <div className="flex items-center justify-center mx-auto bg-grayF7">
            <div className="h-52 w-52">
              <Image
                url={
                  avatar
                    ? `${strapiPathBE}${avatar?.url}`
                    : `/user-image.png 2x`
                }
                className="border-none"
              ></Image>
            </div>
          </div>
        </div>
        <h3 className="font-bold mb-2">Add / Change Image</h3>
        <InputSelectFile></InputSelectFile>
        <Button
          className="bg-primaryBlack text-white font-bold py-4 px-6 mt-8"
          borderNone
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default UserEditPhoto;
