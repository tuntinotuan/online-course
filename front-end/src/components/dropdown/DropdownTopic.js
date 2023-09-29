import React, { useEffect } from "react";
import { debounce } from "lodash";
import {
  handleGetAllTopics,
  handleSearchTopic,
} from "../../redux-toolkit/category/categoryHanlderThunk";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "./";

const DropdownTopic = ({
  watch = () => {},
  placeholder,
  setValue = () => {},
}) => {
  const dispatch = useDispatch();
  const { allTopics } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(handleGetAllTopics());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchDropdownTopic = debounce((e) => {
    dispatch(handleSearchTopic(e?.target?.value || ""));
  }, 500);
  return (
    <Dropdown
      onChange={handleSearchDropdownTopic}
      placeholder={watch("topic") || placeholder}
    >
      <Dropdown.Search placeholder="Find a topic"></Dropdown.Search>
      {allTopics?.map(
        (topic) =>
          topic.name !== watch("topic") && (
            <Dropdown.Option
              onClick={() => {
                setValue("topic", topic?.name);
                setValue("topicId", topic?.id);
                handleSearchDropdownTopic();
              }}
            >
              {topic?.name}
            </Dropdown.Option>
          )
      )}
    </Dropdown>
  );
};

export default DropdownTopic;
