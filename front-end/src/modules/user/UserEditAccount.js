import React, { useEffect } from "react";
import UserTopContent from "./UserTopContent";
import UserTopBlock from "./UserTopBlock";
import {
  InputEmailWithIcon,
  InputTogglePassword,
} from "../../components/input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { handleChangePassword } from "../../redux-toolkit/auth/authHandlerThunk";
import LoadingSpine from "../../components/loading/LoadingSpine";

const schema = yup.object({
  currentPassword: yup.string().required("Please enter your current password"),
  newPassword: yup
    .string()
    .min(8, "Your new password must be at least 8 charactors or greater"),
  reTypePassword: yup
    .string()
    .required("Please enter re-type your new password"),
});

const UserEditAccount = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.global);
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: { currentPassword: "", newPassword: "", reTypePassword: "" },
  });
  const changePasswordHanlder = (values) => {
    if (!isValid) return;
    console.log("values", values);
    dispatch(handleChangePassword(values));
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, { pauseOnHover: false });
    } else {
      error && toast.error(error, { pauseOnHover: false });
    }
  }, [errors, error]);

  return (
    <div>
      <UserTopContent
        title="Account"
        sub="Edit your account setting and change your password here."
      ></UserTopContent>
      <UserTopBlock className="!items-start !justify-start text-start !py-6">
        <form className="flex flex-col items-start gap-3 w-[600px] mx-auto">
          <h3 className="font-bold">Email:</h3>
          <InputEmailWithIcon></InputEmailWithIcon>
        </form>
      </UserTopBlock>
      <form
        onSubmit={handleSubmit(changePasswordHanlder)}
        className="flex flex-col items-start gap-3 w-[600px] mx-auto py-6"
      >
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
          type="submit"
          className="flex items-center justify-center w-[165px] text-base bg-primaryBlack text-white font-bold py-3 px-3 mt-6"
          borderNone
        >
          {loading ? (
            <LoadingSpine size="24px" borderSize="2px"></LoadingSpine>
          ) : (
            "Change password"
          )}
        </Button>
      </form>
    </div>
  );
};

export default UserEditAccount;