import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
// import Header from "../../AdminComponents/Headers";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { deleteProfessionals, getAllProfessionals, updateStatusToProfessional } from "../../feutures/apiPetitions";

export default function Professionals() {
  const [data, setData] = useState([]);
  const [anchor, setAnchor] = useState(false);

  useEffect(() => {
    getAllProfessionals(setData);
  }, [anchor]);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "lastName",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
 
    {
      field: "DNI",
      headerName: "DNI",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "description",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "linkedin",
      headerName: "linkedin",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "areas",
      headerName: "areas",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "skills",
      headerName: "skills",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "state",
      headerName: "state",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      headerName:'Actions',
      flex: 2.2,
      renderCell: (params) => {
      
        return (<Box gap="12px" display="flex">
          <Box
            width="100px"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            onClick={() => {
                updateStatusToProfessional(params.row.id).then((e)=>{
                    params.row.state = e;
                })
            }}
            backgroundColor={params.row.state ==='avalible'?"#66d7d1":"#ffa8b6"}
            borderRadius="4px"
            sx={{
              cursor: "pointer",
            }}
          >
            <Typography sx={{ ml: "5px" }}>{ params.row.state ==='avalible'?'Disable':'Enable'}</Typography>
          </Box>
          <Box
             sx={{
              cursor: "pointer",
            }}
              width="60px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              onClick={() => deleteProfessionals(params.row.id).then(()=> setAnchor(!anchor) )}
              backgroundColor="red"
              borderRadius="4px"
            >
              <DeleteSweepOutlinedIcon style={{ scale: "110%" }} />
            </Box>
        </Box>)
      },
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
