import React, { useEffect } from "react";
import { debounce } from "lodash";
import {
  handleDeleteIndustry,
  handleGetAllIndustries,
  handleGetSingleIndustry,
  handleUpdateIndustry,
} from "../../redux-toolkit/category/categoryHanlderThunk";
import { useDispatch, useSelector } from "react-redux";
import DropdownModuleCategories from "./DropdownModuleCategories";
import Swal from "sweetalert2";
import PopupEditIndustry from "../popup/PopupEditIndustry";
import { setShowPopupEditIndustry } from "../../redux-toolkit/globalSlice";

const DropdownIndustry = ({
  watch = () => {},
  placeholder,
  setValue = () => {},
}) => {
  const dispatch = useDispatch();
  const { allIndustries, industry } = useSelector((state) => state.category);
  const { showPopupEditIndustry } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(handleGetAllIndustries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchDropdownIndustry = debounce((e) => {
    dispatch(handleGetAllIndustries(e?.target?.value || ""));
  }, 500);
  const clickClosePopupIndustry = () => {
    dispatch(setShowPopupEditIndustry(false));
  };
  const getSingleIndustry = (id) => {
    dispatch(handleGetSingleIndustry({ industryId: id }));
    dispatch(setShowPopupEditIndustry(true));
  };
  const updateIndustry = (values) => {
    dispatch(handleUpdateIndustry(values));
    dispatch(setShowPopupEditIndustry(false));
  };
  const deleteIndustry = (industryId, industryName) => {
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
        dispatch(handleDeleteIndustry({ industryId, industryName }));
      }
    });
  };
  return (
    <>
      <DropdownModuleCategories
        onSearchDropdown={handleSearchDropdownIndustry}
        watch={watch}
        placeholder={placeholder}
        data={allIndustries?.data}
        setValue={setValue}
        showEdit
        onClickPen={getSingleIndustry}
        onClickTrash={deleteIndustry}
        offClickOption
        initialShow
      />
      <PopupEditIndustry
        show={showPopupEditIndustry}
        onClose={clickClosePopupIndustry}
        data={industry}
        submitSave={updateIndustry}
      ></PopupEditIndustry>
    </>
  );
};

export default DropdownIndustry;
