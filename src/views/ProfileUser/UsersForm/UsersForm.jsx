import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {putUserData} from "../../../features/apiPetitions.js";
import swal from "sweetalert";
import style from "./UsersForm.module.css";

export default function UsersForm() {
  const users = useSelector((state) => state.user.user);
  const [selectedFile, setSelectedFile] = useState();
  const [fileInputState, setFileInputState] = useState();
  const [previewSource, setPreviewSource] = useState(users?.avatar);

  const dispatch= useDispatch()

  const [error, setError] = useState({});

  const [input, setInput] = useState({
    name: users?.name,
    lastName: users?.lastName,
    phone: users?.phone,
    avatar: users?.avatar,
  });

  const handleInputChanges = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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

    setInput({
      ...input,
      avatar: previewFile,
    });
  };

  const handleSubmitUpdate = async (e) => {
    setError(validation(input));
    e.preventDefault();
    if(!Object.entries(error).at(0)) {
      console.log(input)
      console.log(selectedFile)

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = async () => {

        putUserData({
          state: dispatch,
          type: 'global',
          body: {
            ...input,
            avatar: reader.result
          }
        }).then(() =>
          swal({
            title: "Cambios guardados!",
            text: `Sus datos fueron actualizados correctamente`,
            icon: "success",
          })
        );
  }}else
  swal({
    title: "Error!",
    text: Object.values(error)[0],
    icon: "error",
  });
};
  return (
    <div className={style.profileContainer}>
      <section className={style.profileTitle}>
        <p className={style.p}>
          Estos son tus datos de usuario
          <br />
          (puedes modificarlos si lo necesitas)
        </p>
      </section>

      <form
        className={style.profileForm}
        onSubmit={(e) => handleSubmitUpdate(e)}
      >
        <div className={style.changesField}>
          <section className={style.imageChange}>
            <label className={style.avatarTitle}>Tu foto de perfil</label>
            <div className={style.imageContainer}>
              <img
                className={style.sourceImage}
                src={previewSource || input.avatar}
                alt="imageAvatar"
              />
            </div>

            <input
              className={style.imageInput}
              type="file"
              name="avatar"
              id="imageProfile"
              onChange={handleChangeFile}
            />
          </section>

          <section className={style.dataChange}>
            <input
              className={style.dataDisabled}
              type="text"
              placeholder="Nombres"
              name="name"
              value={input.name}
              disabled
              onChange={(e) => handleInputChanges(e)}
            />

            <input
              className={style.dataDisabled}
              type="text"
              placeholder="Apellidos"
              name="lastName"
              value={input.lastName}
              disabled
              onChange={handleInputChanges}
            />

            <input
              className={style.dataInput}
              type="text"
              required
              placeholder="Telefono"
              name="phone"
              value={input.phone || ""}
              onChange={handleInputChanges}
            />
            {error.phone ? (
              <p className={style.pError}>{error.phone}</p>
            ) : (
              <></>
            )}
          </section>
        </div>

        <button
          className={style.dataButton}
          type="submit"
          onSubmit={(e) => handleSubmitUpdate(e)}
        >
          Actualiza tus datos
        </button>
      </form>
    </div>
  );
}

const validation = (input) => {
  let error = {};
  const onlyLetter = new RegExp("^[A-Z]+$", "i");
  const rgOnlyNumbers = new RegExp(/^\d+$/);

  // if (!input.name) error.name = 'El nombre es requerido'
  // else if(!onlyLetter.test(input.name)) error.name = "Solo letras"

  // if (!input.lastName) error.lastName = 'El apellido es requerido'
  // else if(!onlyLetter.test(input.lastName)) error.lastName = "Solo letras"

  if (!input.phone) error.phone = "Nro telefónico es requerido";
  else if (!rgOnlyNumbers.test(input.phone)) error.phone = "Solo numeros";

  return error;
};