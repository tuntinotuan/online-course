import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { strapiPathBE } from "../../../utils/constants";
import Image from "../../../components/image/Image";
import {
  handleGetAllCoursesInRecycleBin,
  handleRestoreCourse,
} from "../../../redux-toolkit/course/courseHandlerThunk";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AdminHeadingWithBack from "../AdminHeadingWithBack";
import ActionRestore from "../../../components/action/ActionRestore";

const CourseRecycleBin = () => {
  const dispatch = useDispatch();
  const { allCoursesRecycleBin } = useSelector((state) => state.course);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "user",
      headerName: "Author",
      width: 120,
      renderCell: (params) => {
        return <>{params.formattedValue?.username}</>;
      },
    },
    {
      field: "overview_image",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="w-10 h-10">
            <Image
              className="rounded-full"
              url={`${strapiPathBE}${params?.formattedValue?.url}`}
            ></Image>
          </div>
        );
      },
    },
    {
      field: "current_price",
      headerName: "Current Price",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "original_price",
      headerName: "Original Price",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "star",
      headerName: "Star",
      type: "number",
      width: 80,
      editable: true,
    },
    {
      field: "topic",
      headerName: "Topic",
      width: 110,
      renderCell: (params) => {
        return <>{params.formattedValue?.name}</>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-3">
            <ActionRestore
              onClick={() =>
                restoreCourseHandler(params.id, params.row?.overview_image?.url)
              }
            ></ActionRestore>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(handleGetAllCoursesInRecycleBin({ page: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const restoreCourseHandler = (courseId) => {
    dispatch(handleRestoreCourse(courseId));
  };
  return (
    <div>
      <AdminHeadingWithBack
        title="Recycle bin of the all courses"
        to=".."
        relative="path"
      ></AdminHeadingWithBack>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={allCoursesRecycleBin || []}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          className="overflow-auto"
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default CourseRecycleBin;
