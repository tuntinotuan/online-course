import React from "react";
import Dropdown from "./Dropdown";
import { IconPen, IconTrash } from "../icon";

const DropdownModuleCategories = ({
  onSearchDropdown = () => {},
  watch,
  placeholder,
  data,
  setValue,
  showEdit = false,
  onClickPen = () => {},
  onClickTrash = () => {},
  heightOption = "!max-h-[500px] h-auto",
}) => {
  return (
    <Dropdown
      onChange={onSearchDropdown}
      placeholder={watch("topic") || placeholder}
      initialShow={showEdit}
      childrenClass={heightOption}
    >
      <Dropdown.Search placeholder="Find a topic"></Dropdown.Search>
      {data?.map(
        (item) =>
          item.name !== watch("topic") && (
            <Dropdown.Option
              onClick={() => {
                setValue("topic", item?.name);
                setValue("topicId", item?.id);
                !showEdit && onSearchDropdown();
              }}
              offClick={showEdit}
              className="group"
            >
              {item?.name}
              {showEdit && (
                <div className="flex items-center gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <IconPen
                    size={15}
                    onClick={() => onClickPen(item.id)}
                    className="p-1"
                  ></IconPen>
                  <IconTrash
                    size={15}
                    onClick={() => onClickTrash(item.id, item.name)}
                    className="p-1"
                  ></IconTrash>
                </div>
              )}
            </Dropdown.Option>
          )
      )}
    </Dropdown>
  );
};

export default DropdownModuleCategories;
