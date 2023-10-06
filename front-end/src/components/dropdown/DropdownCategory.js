import React, { useEffect } from "react";
import { debounce } from "lodash";
import {
  handleDeleteCategory,
  handleGetAllCategories,
  handleGetSingleCategory,
  handleUpdateCategory,
} from "../../redux-toolkit/category/categoryHanlderThunk";
import { useDispatch, useSelector } from "react-redux";
import DropdownModuleCategories from "./DropdownModuleCategories";
import PopupEditCategory from "../popup/PopupEditCategory";
import { setShowPopupEditCategory } from "../../redux-toolkit/globalSlice";
import Swal from "sweetalert2";

const DropdownCategory = ({
  watch = () => {},
  placeholder,
  setValue = () => {},
}) => {
  const dispatch = useDispatch();
  const { allCategories, category } = useSelector((state) => state.category);
  const { showPopupEditCategory } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(handleGetAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchDropdownCategory = debounce((e) => {
    dispatch(handleGetAllCategories(e?.target?.value || ""));
  }, 500);
  const getSingleCategory = (id) => {
    dispatch(handleGetSingleCategory({ categoryId: id }));
    dispatch(setShowPopupEditCategory(true));
  };
  const clickClosePopupCategory = () => {
    dispatch(setShowPopupEditCategory(false));
  };
  const updateCategory = (values) => {
    dispatch(handleUpdateCategory(values));
    dispatch(setShowPopupEditCategory(false));
  };
  const deleteCategory = (categoryId, categoryName) => {
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
        dispatch(handleDeleteCategory({ categoryId, categoryName }));
      }
    });
  };
  return (
    <>
      <DropdownModuleCategories
        onSearchDropdown={handleSearchDropdownCategory}
        watch={watch}
        placeholder={placeholder}
        data={allCategories?.data}
        setValue={setValue}
        showEdit
        onClickPen={getSingleCategory}
        onClickTrash={deleteCategory}
        offClickOption
        initialShow
      />
      <PopupEditCategory
        show={showPopupEditCategory}
        onClose={clickClosePopupCategory}
        data={category}
        submitSave={updateCategory}
      ></PopupEditCategory>
    </>
  );
};

export default DropdownCategory;
