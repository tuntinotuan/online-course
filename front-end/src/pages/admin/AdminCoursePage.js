import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  handleDeleteCourse,
  handleGetCoursesInAdmin,
} from "../../redux-toolkit/course/courseHandlerThunk";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Button } from "../../components/button";
import { IconTrash } from "../../components/icon";
import Image from "../../components/image/Image";
import { strapiPathBE } from "../../utils/constants";
import AdminHeading from "../../modules/admin/AdminHeading";
import { setShowPopupViewOfDetails } from "../../redux-toolkit/globalSlice";
import ActionView from "../../components/action/ActionView";
import ActionEdit from "../../components/action/ActionEdit";
import ActionDelete from "../../components/action/ActionDelete";

const AdminCoursePage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(0);
  const { allCourses, coursesAdminPagination } = useSelector(
    (state) => state.course
  );
  useEffect(() => {
    !allCourses && dispatch(handleGetCoursesInAdmin({ page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    page > 0 &&
      page > currentPage &&
      page === coursesAdminPagination.page &&
      dispatch(handleGetCoursesInAdmin({ page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
            <ActionView
              to={`/course/${params.id}`}
              onClick={() => dispatch(setShowPopupViewOfDetails(true))}
            ></ActionView>
            <ActionEdit to={`/admin/course-update/${params.id}`}></ActionEdit>
            <ActionDelete
              onClick={() =>
                deleteCourseHandler(params.id, params.row?.overview_image?.url)
              }
            ></ActionDelete>
          </div>
        );
      },
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];
  const deleteCourseHandler = (courseId, urlImage) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      imageUrl: `${strapiPathBE}${urlImage}`,
      imageWidth: 100,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(handleDeleteCourse({ courseId }));
      }
    });
  };
  console.log("currentPage", currentPage);
  const handleOnPaginationModelChange = (currentPage) => {
    console.log("nextPage", currentPage);
    if (allCourses) {
      setPage(currentPage.page);
      setCurrentPage(page);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <AdminHeading>All Course</AdminHeading>
        <Button
          className="flex items-center gap-2 rounded"
          borderNone
          to="trash"
        >
          <IconTrash></IconTrash>Recycle bin
        </Button>
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={allCourses || []}
          initialState={{
            pagination: {
              paginationModel: {
                page: page - 1,
                pageSize: 5,
              },
            },
          }}
          // pageSizeOptions={[5, 10, 20, 50]}
          // paginationModel={{
          //   page,
          //   pageSize: 5,
          // }}
          rowCount={coursesAdminPagination.total}
          onPaginationModelChange={handleOnPaginationModelChange}
          className="overflow-auto"
          disableRowSelectionOnClick
        />
      </Box>
      {allCourses?.map((item) => (
        <Button
          className="custom-btn w-20 text-white font-bold my-5 !p-0"
          borderNone
        >
          {item.id}
          <Image url={`${strapiPathBE}${item.overview_image.url}`}></Image>
        </Button>
      ))}
    </>
  );
};

export default AdminCoursePage;
