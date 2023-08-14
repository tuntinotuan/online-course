import React, { useState } from "react";
import { useController } from "react-hook-form";

const Input = ({
  name = "",
  type = "text",
  placeholder = "",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const { field } = useController({ name, control, defaultValue: "" });
  const handleBlueCapture = (e) => {
    e.target.value ? setFocus(true) : setFocus(false);
  };
  return (
    <div className="relative w-full">
      <input
        id={name}
        type={type}
        className="w-full border border-primaryBlack px-4 pb-2 pt-6"
        onFocus={() => setFocus(true)}
        onBlurCapture={handleBlueCapture}
        {...field}
        {...props}
      />
      <span
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${
          focus ? "top-1/4 text-xs font-semibold" : "font-bold"
        }`}
      >
        {placeholder}
      </span>
    </div>
  );
};

export default Input;
