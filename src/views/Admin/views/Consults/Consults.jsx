import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {  getAllReviews, updateStatusToProfessional } from "../../feutures/apiPetitions";

export default function Consults() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllReviews(setData);
  }, []);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "score",
      headerName: "score",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "score",
      headerName: "score",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "comments",
      headerName: "comments",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "user",
      headerName: "user",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "professional",
      headerName: "professional",
      flex: 1,
      cellClassName: "name-column--cell",
    },

   
  ];

  return (
    <Box m="20px">
      {/* <Header title="Users" subtitle="Managing the Users" /> */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            // color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#5f9ea0",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#f4f1bb",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#5f9ea0",
          },

        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}
