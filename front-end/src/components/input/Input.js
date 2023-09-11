import React, { useState } from "react";
import { useController } from "react-hook-form";

const Input = ({
  name = "",
  type = "text",
  placeholder = "",
  label = "",
  className,
  size = 24,
  children,
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
        placeholder={placeholder}
        className={`w-full border border-primaryBlack placeholder:text-primaryBlack placeholder:text-opacity-75 focus:border focus:border-purpleTextA4 focus:shadow-sm focus:shadow-purpleTextA4 ${className}`}
        onFocus={() => setFocus(true)}
        onChangeCapture={(e) => setValueChange(e.target.value)}
        onBlurCapture={handleBlurCapture}
        style={{
          padding: placeholder
            ? `${size / 3}px ${size / 2}px`
            : `${size}px ${(size * 2) / 3}px ${size / 3}px`,
        }}
        {...field}
        {...props}
      />
      {!placeholder && (
        <label
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all cursor-text ${
            focus ? "top-1/4 text-xs font-semibold opacity-95" : "font-bold"
          }`}
          style={{ left: (size * 2) / 3 }}
          htmlFor={name}
        >
          {label}
        </label>
      )}
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
