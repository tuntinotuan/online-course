import React from "react";
import UserTopContent from "./UserTopContent";
import UserTopBlock from "./UserTopBlock";
import { InputTogglePassword } from "../../components/input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";

const UserEditAccount = () => {
  const { control } = useForm({});
  return (
    <div>
      <UserTopContent
        title="Account"
        sub="Edit your account setting and change your password here."
      ></UserTopContent>
      <UserTopBlock className="!items-start !justify-start text-start !py-6">
        <form className="flex flex-col items-start gap-3 w-[600px] mx-auto">
          <h3 className="font-bold">Email:</h3>
        </form>
      </UserTopBlock>
      <form className="flex flex-col items-start gap-3 w-[600px] mx-auto py-6">
        <h3 className="font-bold">Password:</h3>
        <InputTogglePassword
          control={control}
          name="currentPassword"
          placeholder="Enter current password"
          size={36}
        ></InputTogglePassword>
        <InputTogglePassword
          control={control}
          name="newPassword"
          placeholder="Enter new password"
          size={36}
        ></InputTogglePassword>
        <InputTogglePassword
          control={control}
          name="reTypePassword"
          placeholder="Re-type new password"
          size={36}
        ></InputTogglePassword>
        <Button
          className="text-base bg-primaryBlack text-white font-bold py-3 px-3 mt-6"
          borderNone
        >
          Change password
        </Button>
      </form>
    </div>
  );
};

export default UserEditAccount;
