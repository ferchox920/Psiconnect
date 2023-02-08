import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Avatar,
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import array from './arrayareas.js';
import { useSelector } from "react-redux";
import { getAreas } from "../../../features/apiPetitions";

export default function Profile() {
  //const user = useSelector((state) => state.user.user);
  const user={
    email: "rabadum@asd.com",
    name: "doctorchapatin",
    lastName: "conAnteojos",
    password: "Test1234",
    DNI:"66666666",
    area:'Depresion',
    avatar:'https://res.cloudinary.com/dhkfa798t/image/upload/v1675414590/Smonkey/heroimg_qv9zgi.png'
  }
  const [areas, setAreas] = useState();
  const [areasChecked, setAreasChecked] = useState({})

  // let areaschecked={}
areas?.map(e=>{
  return  e.professionals?.filter((p)=> p.DNI === user.DNI).length ? areasChecked[e.area]= true: areasChecked[e.area]= false
})
  
 // console.log(areaschecked)

  const handleChange=(e)=>{
    e.preventDefault();
    setAreasChecked({
      ...areasChecked,
      [e.target.name]: e.target.checked,
    });
  }

  // useEffect(() => {
  //   getAreas(setAreas);
  // }, []);

  useEffect(() => {
    setAreas(array);
  }, []);

  // propiedades de user: email, name. lastName, avatar, area,
  const error = areas?.filter((v) => v).length < 1;

  return (
    <div>
      <Box>
        <div onClick={() => handleClick(e)}>
          <Avatar src={user.avatar} alt={user.name}></Avatar>
        </div>

        <TextField
          id="outlined-required"
          label="Nombre"
          defaultValue={user.name}
        />
        <TextField
          id="outlined-required"
          label="Apellido"
          defaultValue={user.lastName}
        />
        <TextField
          id="outlined-required"
          label="Email"
          defaultValue={user.email}
        />
        <TextField
          id="outlined-required"
          label="LinkedIn"
          defaultValue="linkedin"
        />
        {areas ? (
          <FormControl
            required
            error={error}
            component="fieldset"
            variant="standard"
          >
            <FormLabel component="legend">Areas</FormLabel>
            <FormGroup>
              {areas.map((e) => {
                return (
                  <FormControlLabel
                  id={e.id}
                    control={
                      <Checkbox
                        checked={areasChecked[e.area]}
                        onChange={handleChange}
                        name={e.area}
                      />
                    }
                    label={e.area}
                  />
                );
              })}
            </FormGroup>
            <FormHelperText>Elija al menos una</FormHelperText>
          </FormControl>
        ) : null}
      </Box>
    </div>
  );
}
