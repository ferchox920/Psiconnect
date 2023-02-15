import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../thema";
import Header from "../../AdminComponents/Headers";
import { useSelector } from "react-redux";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../../features/apiPeticion";

export default function Products() {
  const data = useSelector((state) => state.products.Productos);
  const navigate = useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "titulo",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "precio",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "population",
      headerName: "Populations",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "detalle",
      type: "text",
      headerName: "Details",
      flex: 1,
    },
    {
      field: "categorias",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "Marcas",
      headerName: "Brands",
      flex: 1,
    },
    {
      headerName:'Actions',
      flex: 2.2,
      renderCell: (params) => {
        return (
          <Box gap="12px" display="flex">
            <Box
              width="100px"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              onClick={() => navigate(`/dashboard/editProduct/${params.row.id}`)}
              backgroundColor={colors.greenAccent[600]}
              borderRadius="4px"
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                EDIT
              </Typography>
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
              onClick={() => deleteProduct(params.row.id)}
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
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="Managing the Products Stocks" />
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
