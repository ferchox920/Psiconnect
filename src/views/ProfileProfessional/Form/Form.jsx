import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
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
  Button,
} from "@mui/material";
import array from "./arrayareas.js";
import { useSelector } from "react-redux";
import { getAreas } from "../../../features/apiPetitions";

export default function Profile() {
  //const user = useSelector((state) => state.user.user);
  const user = {
    id: "4f5e763c-6a80-44f6-9b20-d7787da3acf1",
    DNI: "66666666",
    lastName: "conAnteojos",
    name: "doctorchapatin",
    email: "rabadum@asd.com",
    avatar:
      "https://res.cloudinary.com/dhkfa798t/image/upload/v1675414590/Smonkey/heroimg_qv9zgi.png",
    description: null,
    linkedin: null,
    password: "$2b$10$YzEUKqxq0DwNOWwZH7soN./nK84X1f/UCczST5BEg8/pSxJzwBTSe",
    state: true,
    areas: [
      {
        id: "62420af7-655d-4be5-b873-d3e14b48703b",
        area: "Depresion",
        image:
          "https://res.cloudinary.com/dcdywqotf/image/upload/v1675267920/areas/Depresion_gud0dp.svg",
        PROFESSIONAL_AREA: {
          professionalId: "4f5e763c-6a80-44f6-9b20-d7787da3acf1",
          areaId: "62420af7-655d-4be5-b873-d3e14b48703b",
        },
      },
      {
        id: "62420af7-655d-4be5-b873-d3e14b48703b",
        area: "Ansiedad",
        image:
          "https://res.cloudinary.com/dcdywqotf/image/upload/v1675267920/areas/Depresion_gud0dp.svg",
        PROFESSIONAL_AREA: {
          professionalId: "4f5e763c-6a80-44f6-9b20-d7787da3acf1",
          areaId: "62420af7-655d-4be5-b873-d3e14b48703b",
        },
      },
    ],
  };
  const [areas, setAreas] = useState();
  const [areasChecked, setAreasChecked] = useState({});
  const [mapeoUser, setMapeoUser] = useState(user.areas?.map((e) => e.area));

  //const mapeoUser=  // ['Depresion']

  console.log(areasChecked);

  useEffect(() => {
    setAreas(array);
    setAreasChecked(
      mapeoUser?.reduce((acc, area) => {
        acc[area] = true;
        return acc;
      }, {})
    );
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

    setAreasChecked({
      ...areasChecked,
      [e.target.name]: e.target.checked,
    });
  };

  // useEffect(() => {
  //   getAreas(setAreas);
  // }, []);

  const handleSubmit = () => {
    let areasSubmit = [];
    for (let area in areasChecked) {
      if (areasChecked[area] === true) {
        areasSubmit.push(area);
      }
    }
    console.log(areasSubmit);
  };

  const error = areas?.filter((v) => v).length < 1;

  return (
    <div className={style.container}>
      <Box className={style.box}>
        <div onClick={() => handleClick(e)} >
          <Avatar classes={{ root: style.avatar}} src={user.avatar} alt={user.name}></Avatar>
        </div>
        <div style={{display: 'grid' ,gap:'10px'}}>
          <div  style={{display: 'grid', gap:'10px', gridTemplateColumns:'repeat(2, 1fr)'}}>
          <TextField
          sx={{gridColumn: '1'}}
            id="outlined-required"
            label="Nombre"
            defaultValue={user.name}
          />
          <TextField
          sx={{gridColumn: '2'}}
            id="outlined-required"
            label="Apellido"
            defaultValue={user.lastName}
          />
          </div>
          <div style={{display: 'grid' , gridAutoRows: 'minmax(50px, 50px)'}}>
          <TextField
          sx={{gridColumn: 'span 4', gridRow:'1'}}
            id="outlined-required"
            label="Descripción"
            defaultValue={user.description}
          />
          </div>
          <div style={{display:'flex'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
          <TextField
            id="outlined-required"
            label="Email"
            defaultValue={user.email}
          />
          
          <TextField
            id="outlined-required"
            label="LinkedIn"
            defaultValue={user.linkedin}
          />
          </div>
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
                      key={e.id}
                      control={
                        <Checkbox
                          value={areasChecked[e.area]}
                          checked={areasChecked[e.area]}
                          onChange={(e) => handleChange(e)}
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
          </div>
        </div>
        <div>
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            variant="outlined"
          >
            Guardar cambios
          </Button>
        </div>
      </Box>
    </div>
  );
}
