import React, { useEffect } from "react";
import { debounce } from "lodash";
import {
  handleDeleteTopic,
  handleGetAllTopics,
  handleGetSingleTopic,
  handleUpdateTopic,
} from "../../redux-toolkit/category/categoryHanlderThunk";
import { useDispatch, useSelector } from "react-redux";
import DropdownModuleCategories from "./DropdownModuleCategories";
import PopupEditTopic from "../popup/PopupEditTopic";
import Swal from "sweetalert2";
import { setShowPopupEditTopic } from "../../redux-toolkit/globalSlice";

const DropdownTopic = ({
  watch = () => {},
  placeholder,
  setValue = () => {},
  heightOption = "",
  showEdit = false,
}) => {
  const dispatch = useDispatch();
  const { allTopics, topic } = useSelector((state) => state.category);
  const { showPopupEditTopic } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(handleGetAllTopics());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchDropdownTopic = debounce((e) => {
    dispatch(handleGetAllTopics(e?.target?.value || ""));
  }, 500);
  const getSingleTopic = (id) => {
    dispatch(handleGetSingleTopic({ topicId: id }));
    dispatch(setShowPopupEditTopic(true));
  };
  const clickClosePopupTopic = () => {
    dispatch(setShowPopupEditTopic(false));
  };
  const updateTopic = (values) => {
    dispatch(handleUpdateTopic(values));
    dispatch(setShowPopupEditTopic(false));
  };
  const deleteTopic = (topicId, topicName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      imageWidth: 100,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(handleDeleteTopic({ topicId, topicName }));
      }
    });
  };
  return (
    <>
      <DropdownModuleCategories
        onSearchDropdown={handleSearchDropdownTopic}
        watch={watch}
        placeholder={placeholder}
        data={allTopics?.data}
        setValue={setValue}
        onClickPen={getSingleTopic}
        onClickTrash={deleteTopic}
        heightOption={heightOption}
        showEdit={showEdit}
      />
      <PopupEditTopic
        show={showPopupEditTopic}
        onClose={clickClosePopupTopic}
        data={topic}
        submitSave={updateTopic}
      ></PopupEditTopic>
    </>
    // <Dropdown
    //   onChange={handleSearchDropdownTopic}
    //   placeholder={watch("topic") || placeholder}
    // >
    //   <Dropdown.Search placeholder="Find a topic"></Dropdown.Search>
    //   {allTopics?.map(
    //     (topic) =>
    //       topic.name !== watch("topic") && (
    //         <Dropdown.Option
    //           onClick={() => {
    //             setValue("topic", topic?.name);
    //             setValue("topicId", topic?.id);
    //             handleSearchDropdownTopic();
    //           }}
    //         >
    //           {topic?.name}
    //         </Dropdown.Option>
    //       )
    //   )}
    // </Dropdown>
  );
};

export default DropdownTopic;
