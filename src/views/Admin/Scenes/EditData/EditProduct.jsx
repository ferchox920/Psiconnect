import {
    Box,
  } from "@mui/material";
  
  import Header from "../../AdminComponents/Headers";
  import { editProduct, getProductsById } from "../../../../features/apiPeticion";
  import FormProduct from "../../AdminComponents/FormProduct";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
  
  
  const EditProduct = () => {

    const { id } = useParams();
    const [producto, setProducto ] = useState();
    useEffect(()=>{
        getProductsById(setProducto, id)
        console.log(producto);
    },[id])


    const initialValues = {
        nombre: producto?.titulo,
        detalle: "",
        precio: "",
        stock: "",
        categorias: [],
        marcas: [],
        img:''
      };
   
    return (
      <Box m="20px">
        <Header title="EDIT PRODUCTS" subtitle="Edit Product" />
  
        {producto?<FormProduct apiPetition={editProduct} initialValues={producto} text={'Edit Product'}
         />:null}
      </Box>
    );
  };
  
  export default EditProduct;