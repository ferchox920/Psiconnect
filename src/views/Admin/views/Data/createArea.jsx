import {
    Box,
  } from "@mui/material";
import FormArea from "../../Components/FormArea";
import Header from "../../Components/Header";
  
  
  const initialValues = {
    titulo: "",
    detalle: "",
    precio: "",
    stock: "",
    categorias: [],
    Marcas: [],
    imagen: "",
  };
  
  const CreateArea = () => {
   
    return (
      <Box m="20px">
        <Header title="CREATE AREA" subtitle="Create a New Area" />
  
        <FormArea apiPetition={()=> console.log('sad')}   initialValues={initialValues} text={'Create a New Area'}
         />
      </Box>
    );
  };
  
  export default CreateArea;