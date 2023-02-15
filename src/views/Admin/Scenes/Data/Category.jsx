import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../thema";
import Header from "../../AdminComponents/Headers";
import { useSelector } from "react-redux";
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

export default function Category() {
  const data = useSelector((state) => state.products.Categorias);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nombre",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Marcas",
      headerName: "Brands",
      type: "text",
    },
    {
      field: "productos",
      headerName: "Products",
      flex: 1,
    },
    {
      flex: 2.2,
      renderCell: (params) => {
        return (
          <Box gap='12px' display='flex'>
            <Box
              width="100px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              onClick={() => window.alert('1')}
              backgroundColor={colors.greenAccent[600]}
              borderRadius="4px"
            >
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                EDIT
              </Typography>
            </Box>
            <Box
              width="60px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              onClick={() => window.alert('3')}
              backgroundColor= 'red'
              borderRadius="4px"
            >
              <DeleteSweepOutlinedIcon style={{scale:'110%'}} />
            </Box>
            <Box
              width="50px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              onClick={() => window.alert('2')}
              backgroundColor= {colors.blueAccent[700]}
              borderRadius="4px"
            >
              <FullscreenExitOutlinedIcon style={{scale:'120%'}} />
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="CATEGORIES" subtitle="Managing the Categories Stocks" />
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
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
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
