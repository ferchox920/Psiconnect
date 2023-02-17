import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getSkills } from "../../../../features/apiPetitions";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import Header from "../../Components/Header";
import { deleteSkill, updateStatusToSkill } from "../../feutures/apiPetitions";
import FormSkill from "../../Components/FormSkill";

export default function Skills() {
  const [data, setData] = useState([]);
  const [anchor, setAnchor] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [initialValue, SetInitialValue] = useState();

  useEffect(() => {
    getSkills({ state: setData });
  }, [anchor]);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "skill",
      headerName: "skill",
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
      headerName: "actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box gap="12px" display="flex">
            <Box
              width="100px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              onClick={() => {
                updateStatusToSkill(params.row.id).then(() => {
                  params.row.state = !params.row.state;
                });
              }}
              backgroundColor={params.row.state ? "#66d7d1" : "#ffa8b6"}
              borderRadius="4px"
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography sx={{ ml: "5px" }}>
                {params.row.state ? "Disable" : "Enable"}
              </Typography>
            </Box>
            <Box
              width="100px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              onClick={() => {
                setOpenModal(true);
                SetInitialValue({
                  value: params.row.skill,
                  id: params.row.id,
                });
              }}
              backgroundColor={"#ffa8b6"}
              border="2px solid black"
              borderRadius="4px"
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography sx={{ ml: "5px" }}>EDIT</Typography>
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
              onClick={() =>
                deleteSkill(params.row.id).then((e) => setAnchor(!anchor))
              }
              backgroundColor="red"
              borderRadius="4px"
            >
              <DeleteSweepOutlinedIcon style={{ scale: "110%" }} />
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          <Header title="Skills" subtitle="Managing the Skills" />
          <Box
            width="300px"
            height="150px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              height="50px"
              backgroundColor="#66d7d1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px 25px"
              borderRadius="10px"
              border=" 2px solid cream"
              onClick={() => {
                setOpenModal(true);
                SetInitialValue(null)
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography fontFamily="Poppins" fontWeight="600" fontSize="20px">
                CREATE SKILL
              </Typography>
            </Box>
          </Box>
        </Box>
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
      {openModal && (
        <FormSkill
          initialValue={initialValue?.value || null}
          id={initialValue?.id || null}
          close={setOpenModal}
          anchor={anchor}
          setAnchor={setAnchor}
        />
      )}
    </>
  );
}
