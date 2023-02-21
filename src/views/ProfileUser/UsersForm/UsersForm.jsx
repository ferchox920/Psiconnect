import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import putUserData from '../../../features/apiPetitions.js';
import style from './UsersForm.module.css';

export default function UsersForm() {
  const users = useSelector((state) => state.user.user);
  const [file, setFile] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const { id } = useParams();

  const [error, setError] = useState({
    phone: '',
  });

  const [input, setInput] = useState({
    name: users.name,
    lastName: users.lastName,
    phone: '',
    image: '',
  });

  const handleInputChanges = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(validation({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    if (Object.entries(error).length === 0) {
      try {
        const updatedUser = await putUserData({ ...input, id: users.id });
        swal({
          title: 'Cambios guardados!',
          text: 'Sus datos fueron actualizados correctamente',
          icon: 'success',
        });
      } catch (err) {
        swal({
          title: 'Error!',
          text: 'No se pudo actualizar sus datos. Inténtelo de nuevo más tarde',
          icon: 'error',
        });
      }
    } else {
      swal({
        title: 'Error!',
        text: Object.values(error)[0],
        icon: 'error',
      });
    }

    setInput({
      name: '',
      lastName: '',
      phone: '',
      image: '',
    });
  };

  const handledImageProfile = (e) => {
    if (!e.target.files[0]) return;

    setInput({
      ...input,
      [e.target.name]: e.target.files[0],
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handledChangeImage = (e) => {
    setInput({
      ...input,
      image: '',
    });

    let img = document.querySelector('#imageProfile');
    img.value = '';
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

      <form className={style.profileForm} onSubmit={handleSubmitUpdate}>
        <div className={style.changesField}>
          <section className={style.imageChange}>
            <label className={style.avatarTitle}>Tu foto de perfil</label>
            <div className={style.imageContainer}>
              <img className={style.sourceImage} src={users.image || input.image} />
            </div>

            <input
              className={style.imageInput}
              type='file'
              name='image'
              id='imageProfile'
              onChange={handledImageProfile}
            />
          </section>

          <section className={style.dataChange}>
            <input
              className={style.dataInput}
              type='text'
              placeholder='Nombres'
              name='name'
              value={input.name}
              disabled
            />

              <input
                className={style.dataInput}  
                type="text" 
                placeholder='Apellidos'
                name = 'lastName'
                value = {users?.lastName}
                disabled
                onChange= {handleInputChanges} 
              />

              <input
                className={style.dataInput}  
                type="text" 
                placeholder='Telefono'
                name = 'phone'
                value = {input.phone}
                onChange= {handleInputChanges}
              />
              {error.phone ? <p >{error.phone}</p> : <></>}
              
              <input
                className={style.dataInput}  
                type="text" 
                placeholder='URL de tu imagen en linea' 
                id = 'imgUrl'
                name = 'image'
                value = {input.image}
                onChange= {e => handleInputChanges(e)}
              />                      
            </section>
          </div>
          

          <button
              className={style.dataButton}  
              type="submit" 
              disabled = {Object.keys(validation(input)).length !== 0 ? true : false}
              onSubmit = {e => handleSubmitUpdate(e)}  
          >Actualiza tus datos</button>            
        </form>
      </div>
  )
}


const validation  = (input) => {
  let error = {}
  const onlyLetter = new RegExp('^[A-Z]+$', 'i');
  const rgOnlyNumbers = new RegExp(/^\d+$/)
  

  // if (!input.name) error.name = 'El nombre es requerido'
  // else if(!onlyLetter.test(input.name)) error.name = "Solo letras" 

  // if (!input.lastName) error.lastName = 'El apellido es requerido'
  // else if(!onlyLetter.test(input.lastName)) error.lastName = "Solo letras" 

  if(!input.phone) error.phone = 'Nro tlf es requerido'
  else if(!rgOnlyNumbers.test(input.phone)) error.phone = "Solo numeros" 
  
return error
}
