import { useState } from "react";
import validate from "./validate";
import { errorMenssage } from "../../../features/errorsModals";
import style from './Form.module.css'

const FormArea = ({ initialValues, apiPetition, text }) => {

  const [values, setvalues] = useState(initialValues);
  const [error, setError] = useState({});
  const [fileInputState, setFileInputState] = useState();
  const [previewSource, setPreviewSource] = useState(initialValues.image);
  const [selectedFile, setSelectedFile] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (false)
      return errorMenssage(`${Object.values(error)[0]}`);
    if (previewSource === initialValues.image)
      return await apiPetition(values);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      await apiPetition({ ...values, image: reader.result});
    };
  };
  const handleChange = (e) => {
    console.log(values);

    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // setError(validate({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //   }));
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
      image: previewFile,
    });
  };


  return (
    <form className={style.form} onSubmit={handleFormSubmit}> 
    <div className={style.divContainerImg}>
      <div className={style.divAvatar}>
        <img
          className={style.avatar}
          src={previewSource || values.image}
          alt="imgAvatar"
        />
      </div>
      <div className={style.divInputsImage}>
        <input
          className={style.inputImage}
          type="file"
          name="image"
          onChange={handleChangeFile}
        />
      </div>
    </div>
    <input
      className={error.linkedin ? style.inputError : style.inputs}
      type="text"
      name="area"
      value={values.area}
      placeholder="nombre de area..."
      onChange={handleChange}
    />
    <label className={style.label}>Descripción</label>
    <p className={style.p}>
      *escribe una breve descripción de tu perfil como profesional si aún no
      la tienes
      <br />
      *CONSEJO* trata de añadir datos que creas importantes y relevantes de
      tu perfil
    </p>
    <span className={style.spanError}>{error.description}</span>
    <div className={style.containerDescription}>
      <textarea
        name="description"
        value={values.description || ""}
        placeholder="Descripcion"
        className={style.description}
        onChange={handleChange}
      ></textarea>
    </div>
 

    <input className={style.inputSubmit} type="submit" value="Actualizar" />
  </form>
    // <Box m="20px">
    //   <Formik onSubmit={handleFormSubmit} initialValues={values}>
    //     {({ errors, touched, handleBlur, handleSubmit }) => (
    //       <form onSubmit={handleSubmit}>
    //         <Box
    //           display="grid"
    //           gap="30px"
    //           gridTemplateColumns="repeat(6, minmax(0, 1fr))"
    //           sx={{
    //             "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
    //           }}
    //         >
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="area"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.area}
    //             name="area"
    //             error={!!touched.area && !!errors.area}
    //             helperText={touched.area && errors.area}
    //             sx={{ gridColumn: "span 2" }}
    //           />
           
 
   
    //           <TextField
    //             fullWidth
    //             variant="filled"
    //             type="text"
    //             label="Description"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.description}
    //             name="description"
    //             error={!!touched.description && !!errors.description}
    //             helperText={touched.description && errors.description}
    //             sx={{ gridColumn: "span 6" }}
    //           />
    //           <TextField
    //             fullWidth
    //             variant="standard"
    //             type="file"
    //             source="img"
    //             label="PHOTO GALLERY:"
    //             onBlur={handleBlur}
    //             onChange={handleChangeFile}
    //             style={{ padding: "0px 0" }}
    //             name="img"
    //             sx={{ gridColumn: "span 6" }}
    //           ></TextField>
    //           <Box
    //             sx={{ gridColumn: "span 6" }}
    //             width="100%"
    //             display="flex"
    //             flexWrap="wrap"
    //             justifyContent="center"
    //           >
    //             <img
    //               style={{ width: "33%" }}
    //               src={previewSource}
    //               alt={values.titulo}
    //             />

        
    //           </Box>
    //         </Box>
    //         <Box display="flex" justifyContent="end" mt="20px">
    //           <Button type="submit" color="secondary" variant="contained">
    //             {text}
    //           </Button>
    //         </Box>
    //       </form>
    //     )}
    //   </Formik>
    // </Box>
  );
};

export default FormArea;
