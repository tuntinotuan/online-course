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
  const [valueChange, setValueChange] = useState("");
  const { field } = useController({ name, control, defaultValue: "" });
  const handleBlurCapture = (e) => {
    const value = e.target.value;
    value ? setFocus(true) : setFocus(false);
  };
  return (
    <div className="relative w-full">
      <input
        id={name}
        type={type}
        className="w-full border border-primaryBlack px-4 pb-2 pt-6"
        onFocus={() => setFocus(true)}
        onChangeCapture={(e) => setValueChange(e.target.value)}
        onBlurCapture={handleBlurCapture}
        {...field}
        {...props}
      />
      <label
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all cursor-text ${
          focus ? "top-1/4 text-xs font-semibold opacity-95" : "font-bold"
        }`}
        htmlFor={name}
      >
        {placeholder}
      </label>
      {children && (
        <div
          className={`icon-eye absolute top-1/2 right-4 -translate-y-1/2 transition-all ${
            valueChange ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Input;
