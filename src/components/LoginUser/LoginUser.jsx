import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../features/apiPetitions";
import style from './LoginUser.module.css'

function validate(form) {
  let errors = {}
 
  if(!form.email || !form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)){
    errors.email = "Debe introducir un formato de e-mail válido"
  }

  if(form.password.trim().length<8 || !form.password.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)){
    errors.password = "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minúscula y un número"
  }


  return errors
}

export default function LoginUser() {
  

  
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword , setShowPassword]= useState(false)

  function handleCredentialResponse(response) {
    //console.log(response.credential);
    const dataUser = jwtDecode(response.credential);
    //console.log(dataUser);
    const body = {
      email: dataUser.email,
      password: `${dataUser.email}${dataUser.sub}A`,
    };
   // console.log(body);
    userLogin(body);
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "299389682703-0bh5pf7g1r7c21169huc3s75rfdqr0cu.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
      thema: "inline",
      size: "large",
    });
  }, []);


  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(form))
    if(Object.keys(errors).length===0 && Object.values(form)[0]!==''){
    userLogin(form)
     window.alert("logged in");
   }
    //setForm({email:'', password:''});

   
  };
  return (
    <div className={style.container}>
      <div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div>
            <h1>Inicia sesión</h1>
          </div>
          <div>
            <div>
              <input
                type="text"
                value={form.email}
                name="email"
                placeholder='Correo electrónico'
                onChange={(e) => changeHandler(e)}
              />
              {errors.email && <h5>{errors.email}</h5>}
            </div>
            <div className={style.password}>
              <input
                type={ showPassword ? "text" : "password"}
                value={form.password}
                name="password"
                placeholder='Contraseña'
                onChange={(e) => changeHandler(e)}
              />
              <div className={style.pswicon} onClick={()=> setShowPassword(!showPassword)}>
{showPassword ? (<img className={style.img} src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" alt="showPassword"/>) :
<img className={style.img} src="https://cdn-icons-png.flaticon.com/512/6405/6405909.png" alt="nonShowPassword"/>}
              </div>
              
            </div>
            {errors.password && <h5>{errors.password}</h5>}
          </div>
          <div>
          
            <input
              type="submit"
              disabled={
                errors.email !== undefined || errors.password !== undefined
              }
              value={"Iniciar Sesión"}
            ></input>
          </div>
          <NavLink to="/forgotpassword">
              <h5>Olvidé mi contraseña</h5>
            </NavLink>
        <div id="SignInDiv" />
          <p>
            ¿Aún no tienes una cuenta?
            <NavLink to="/registerUser">Regístrate aquí</NavLink>
          </p>
        </form>

      </div> 
    </div>
  );
}
