import {
  Box,

} from "@mui/material";

import Header from "../../AdminComponents/Headers";
import { createProduct } from "../../../../features/apiPeticion";
import FormProduct from "../../AdminComponents/FormProduct";

const initialValues = {
  titulo: "",
  detalle: "",
  precio: "",
  stock: "",
  categorias: [],
  Marcas: [],
  imagen: "",
};

const CreateProduct = () => {
 
  return (
    <Box m="20px">
      <Header title="CREATE PRODUCTS" subtitle="Create a New Product" />

      <FormProduct apiPetition={createProduct} initialValues={initialValues} text={'Create a New Product'}
       />
    </Box>
  );
};

export default CreateProduct;
