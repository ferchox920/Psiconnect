import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import Options from "./options";
import validate from "../helpers/validate";

const FormProduct = ({ initialValues, apiPetition, text }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const data = useSelector((state) => state.products);
  const [values, setvalues] = useState(initialValues);
  const [error, setError] = useState({});
  const [fileInputState, setFileInputState] = useState();
  const [previewSource, setPreviewSource] = useState(initialValues.imagen?.URL);
  const [selectedFile, setSelectedFile] = useState();

  const [array, setArray] = useState({
    categorias: initialValues?.categorias,
    Marcas: initialValues?.Marcas,
  });

  const handleFormSubmit = async () => {
    console.log("asd");
    if (Object.keys(error).length)
      return window.alert(`${Object.values(error)[0]}`);
    if (previewSource === initialValues.imagen)
      await apiPetition({ ...values, ...array });
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      await apiPetition({ ...values, ...array, imagen: reader.result });
    };
  };
  const handleChange = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setError(validate({ ...values, ...array }));
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);

    setvalues({
      ...values,
      imagen: previewFile,
    });
  };
  const handleChangeArray = (e) => {
    const { value, name } = e.target;
    if (array[e.target.name].includes(e.target.value)) return;
    setvalues({
      ...values,
      [name]: value,
    });
    setArray({
      ...array,
      [name]: [value, ...array[name].splice(0, 2)],
    });
    setError(
      validate({
        ...values,
        ...array,
        [name]: [value, ...array[name].splice(0, 2)],
      })
    );
  };

  return (
    <Box m="20px">
      <Formik onSubmit={handleFormSubmit} initialValues={values}>
        {({ errors, touched, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.titulo}
                name="titulo"
                error={!!touched.titulo && !!errors.titulo}
                helperText={touched.titulo && errors.titulo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.precio}
                name="precio"
                error={!!touched.precio && !!errors.precio}
                helperText={touched.precio && errors.precio}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="stock"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stock}
                name="stock"
                error={!!touched.stock && !!errors.stock}
                helperText={touched.stock && errors.stock}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                select
                defaultValue=""
                variant="filled"
                type="select"
                label="categories"
                onBlur={handleBlur}
                onChange={handleChangeArray}
                value={values.categorias}
                name="categorias"
                error={!!touched.categorias && !!errors.categorias}
                helperText={touched.categorias && errors.categorias}
                sx={{ gridColumn: "span 3" }}
              >
                <MenuItem disabled selected value="">
                  Select Categories
                </MenuItem>
                {data?.Categorias.map((e) => (
                  <MenuItem value={e.nombre} key={e.nombre}>
                    {e.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                select
                defaultValue=""
                variant="filled"
                type="text"
                label="Brans"
                onBlur={handleBlur}
                onChange={handleChangeArray}
                value={values.Marcas}
                name="Marcas"
                error={!!touched.Marcas && !!errors.Marcas}
                helperText={touched.Marcas && errors.Marcas}
                sx={{ gridColumn: "span 3" }}
              >
                <MenuItem disabled selected value="">
                  Select Brand
                </MenuItem>
                {data?.Marcas.map((e) => (
                  <MenuItem value={e.nombre} key={e.id}>
                    {e.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.detalle}
                name="detalle"
                error={!!touched.detalle && !!errors.detalle}
                helperText={touched.detalle && errors.detalle}
                sx={{ gridColumn: "span 6" }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="file"
                source="img"
                label="PHOTO GALLERY:"
                onBlur={handleBlur}
                onChange={handleChangeFile}
                style={{ padding: "0px 0" }}
                name="img"
                sx={{ gridColumn: "span 6" }}
              ></TextField>
              <Box
                sx={{ gridColumn: "span 6" }}
                width="100%"
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
              >
                <img
                  style={{ width: "33%" }}
                  src={previewSource}
                  alt={values.titulo}
                />

                <Options
                  name="categorias"
                  array={array.categorias}
                  state={array}
                  setState={setArray}
                />

                <Options
                  name="Marcas"
                  array={array.Marcas}
                  state={array}
                  setState={setArray}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                {text}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FormProduct;
