import React, { useState } from "react";
import Input from "./Input";
import { IconEye, IconEyeClose } from "../icon";

const InputTogglePassword = ({
  name = "password",
  placeholder = "Password",
  control,
  sizeIcon = 18,
  ...props
}) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Input
      control={control}
      name={name}
      type={togglePassword ? "text" : "password"}
      placeholder={placeholder}
      {...props}
    >
      {togglePassword ? (
        <IconEyeClose
          className="cursor-pointer"
          onClick={() => setTogglePassword(false)}
          size={sizeIcon}
        ></IconEyeClose>
      ) : (
        <IconEye
          className="cursor-pointer"
          onClick={() => setTogglePassword(true)}
          size={sizeIcon}
        ></IconEye>
      )}
    </Input>
  );
};

export default InputTogglePassword;
