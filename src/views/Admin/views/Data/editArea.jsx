import {
    Box,
  } from "@mui/material";
import { useEffect,useState } from "react";
import { getAreaById } from "../../../../features/apiPetitions";
import { editArea } from "../../feutures/apiPetitions";
import FormArea from "../../Components/FormArea";
import Header from "../../Components/Header";
import { useLocation } from "react-router";
  
  
  const EditArea = () => {

  const { pathname } = useLocation();
  const id = pathname.split("/")[3]

    const [area, setArea ] = useState();
    useEffect(()=>{
        getAreaById(setArea, id)
    },[id])


    const initialValues = {
        image:area?.image,
        area:area?.area,
        description:area?.description,
        id
      };
   
    return (
      <Box m="20px">
        <Header title="EDIT AREA" subtitle="Edit Area" />
  
        {area?<FormArea apiPetition={editArea} initialValues={initialValues} text={'Edit Area'}
         />:null}
      </Box>
    );
  };
  
  export default EditArea;