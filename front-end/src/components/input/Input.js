import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <div hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children && <div className="input-icon">{children}</div>}
    </div>
  );
};

export default Input;
