import React from "react";
import { Dropdown } from "./";

const listStatus = [
  {
    value: "draft",
  },
  {
    value: "public",
  },
  {
    value: "reject",
  },
];

const DropdownStatus = ({ currentStatus, setValue = () => {} }) => {
  function renderClassForOption(value) {
    switch (value) {
      case "draft":
        return "text-grayA6";
      case "public":
        return "text-green-500";
      case "reject":
        return "text-red-500";
      default:
        break;
    }
  }
  const handleClickOption = (value) => {
    setValue("status", value);
  };
  return (
    <>
      <Dropdown placeholder={`${currentStatus}`} childrenClass="h-auto">
        {listStatus.map((status) => (
          <Dropdown.Option
            className={`capitalize hover:font-bold ${renderClassForOption(
              status.value
            )}`}
            onClick={() => handleClickOption(status.value)}
          >
            {status.value}
          </Dropdown.Option>
        ))}
      </Dropdown>
    </>
  );
};

export default DropdownStatus;
