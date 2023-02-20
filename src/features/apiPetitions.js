import axios from "./axios.js";
import { errorMenssage, successMessage } from "./errorsModals.js";
import { setFilterProfessional } from "./professionalSlice.js";
import { setUser } from "./userSlice.js";

export async function userRegister(body) {
  try {
    const peticion = await axios.post(`/user/register`, body);
    localStorage.setItem("tkn", peticion?.data);
    return peticion;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}
export async function professionalRegister(body) {
  try {
    const request = await axios.post("/professional/register", body);
    successMessage("En breves le llegara un mail").then(
      (e) => (window.location.pathname = "/")
    );

    return request;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}
export async function userLogin(body) {
  try {
    const peticion = await axios.post(`/user/login`, body);
    localStorage.setItem("tkn", peticion?.data);
    return peticion;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}
export async function userLoginByGoogle(body) {
  try {
    const peticion = await axios.post(`/user/google`, body);
    localStorage.setItem("tkn", peticion?.data);
    return peticion;
  } catch (error) {
    console.log(error);
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}

export async function profLogin(body) {
  try {
    const peticion = await axios.post(`/professional/login`, body);
    localStorage.setItem("profTkn", peticion?.data);
    return peticion;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}

export async function profUpdate({ state, type, payload }) {
  try {
    const petition = await axios.put("/professional/update/id", payload, {
      headers: { authorization: `Bearer ${localStorage.getItem("profTkn")}` },
    });
    type === "local" ? state(petition?.data) : state(setUser(petition?.data));
    console.log(petition?.data);
    return petition;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}

export async function getProfByJWT({ state, type }) {
  try {
    const peticion = await axios.get("/professional/id", {
      headers: { authorization: `Bearer ${localStorage.getItem("profTkn")}` },
    });
    type === "local" ? state(peticion?.data) : state(setUser(peticion?.data));
  } catch (error) {
    localStorage.removeItem("profTkn"), console.log("jaj soy un error");
  }
}

export async function changePassword(body) {
  try {
    const peticion = await axios.post(`/user/login`, body, {
      headers: { authorization: `Bearer ${localStorage.getItem("tkn")}` },
    });
    localStorage.setItem("tkn", peticion?.data.data);
    return peticion;
  } catch (error) {
    return error.response;
  }
}
export async function changePasswordProfessional(body) {
  try {
    const peticion = await axios.put(`/professional/changePassword`, body, {
      headers: { authorization: `Bearer ${localStorage.getItem("profTkn")}` },
    });
    successMessage("Cambiamos tu contraseña");
    return peticion;
  } catch (error) {
    errorMenssage("Tuvimos problemas");
    return error.response;
  }
}
export async function changePasswordUser(body) {
  try {
    const peticion = await axios.put(`/user/changePassword`, body, {
      headers: { authorization: `Bearer ${localStorage.getItem("tkn")}` },
    });
    successMessage("Cambiamos tu contraseña");
    return peticion;
  } catch (error) {
    console.log(localStorage.getItem("tkn"));
    errorMenssage("Tuvimos problemas");
    return error.response;
  }
}
export async function changeEmailProfessional(body) {
  try {
    const peticion = await axios.put(`/professional/changeEmail`, body, {
      headers: { authorization: `Bearer ${localStorage.getItem("profTkn")}` },
    });
    successMessage("Ve a verificar tu email");
    localStorage.removeItem("profTkn");
    window.location.pathname = "/";
    return peticion;
  } catch (error) {
    errorMenssage("Tuvimos problemas");
    throw new Error(error);
  }
}
export async function changeEmailUser(body) {
  try {
    const peticion = await axios.put(`/user/changeEmail`, body, {
      headers: { authorization: `Bearer ${localStorage.getItem("tkn")}` },
    });
    successMessage("Ve a verificar tu email");
    localStorage.removeItem("tkn");
    window.location.pathname = "/";
    return peticion;
  } catch (error) {
    errorMenssage("Tuvimos problemas");
    throw new Error(error);
  }
}
export async function getAreas(state) {
  try {
    const peticion = await axios.get("/areas");
    state(peticion.data);
  } catch (error) {
    return error.response;
  }
}

export async function getUserByJWT({ state, type }) {
  try {
    const peticion = await axios.get(`/user/id`, {
      headers: { authorization: `Bearer ${localStorage.getItem("tkn")}` },
    });
    type === "local" ? state(peticion?.data) : state(setUser(peticion?.data));
  } catch (error) {
    localStorage.removeItem("tkn"), console.log("soy un mapa");
  }
}
export async function getProfessionalById(id, state) {
  try {

    const peticion = await axios.get(`/professional/details/${id}`);  

    return state(peticion.data);
  } catch (error) {
    return error.response;
  }
}

export async function getOnlyAreas(state) {
  try {
    const peticion = await axios.get(`/areas/onlyAreas`);
    return state(peticion?.data);
  } catch (error) {
    return error.response;
  }
}

export async function getProfessionalsFilters({
  state,
  type,
  area,
  name,
  lastName,
}) {
  console.log(area);
  try {
    const peticion = await axios.get(
      `/professional${area ? `/area/${area}` : ""}${
        name
          ? `?${
              !lastName ? `name=${name}` : `name=${name}&lastName=${lastName}`
            }`
          : ""
      }`
    );
    type === "local"
      ? state(peticion?.data)
      : state(setFilterProfessional(peticion?.data));
  } catch (error) {
    errorMenssage(`no se encontro a ${name} ${lastName ? lastName : ""}`);
    throw new Error("error");
  }
}

export async function getSkills({ state, type }) {
  try {
    const request = await axios.get("/skills");
    state(request?.data);
  } catch (error) {
    return error.response;
  }
}

export async function getProfessionalReview(id, state) {
  try {
    const peticion = await axios.get(`/review/${id}`)
    return state(peticion?.data)
  }catch(error) {
    return error.response
  }
}

export async function verifyTokenPostRegister(token) {
  try {
    const request = await axios.get(`/professional/token/postRegister`, {
      headers: { pos: `Bearer ${token}` },
    });
    return request;
  } catch (error) {
    return error.response;
  }
}

export async function createProfessionalReview(body) {
  try {
      const createReview = await axios.post(`/review/${body.professionalId}`, body)
      swal({
        title: "Gracias por calificar!",
        text: `Enviado`,
        icon: "success",
      })
      return (createReview)
  } catch (error) {
    swal({
      title: "upps",
      text: `algo salio mal`,
      icon: "error",
    })
  }
}

export async function requestConsultation(body) {
  try {
    const peticion = await axios.post(`/payment/create-payment`, body);
    console.log(peticion.data.data.links[1].href);
    return peticion.data.data.links[1].href;
  } catch (error) {
    errorMenssage("Upps algo salio mal en nuestros sistemas");
    throw new Error("upps");
  }
}

export async function getProfessionalConsults(professionalId, state) {
  try {
    const response = await axios.get(`/consult/professional/${professionalId}`);
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserConsults(userId, state) {
  try {
    const response = await axios.get(`/consult/user/${userId}`);
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(userID, state) {
  try {
    const response = await axios.get(`/user/${userID}`);
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}
export async function getAreaById(state, id) {
  try {
    const response = await axios.get(`/areas/id/${id}`);
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}
export async function postRegisterProfesional(body, token) {
  try {
    const request = await axios.put(
      "/professional/descriptionProfesional",
      body,
      {
        headers: { pos: `Bearer ${token}` },
      }
    );
    return request;
  } catch (error) {
    return error;
  }
}

export default async function putUserData(id, body) {
  try {
    const updateUser = await axios.put(`user/${body.id}`, body);
    return updateUser;
  } catch (error) {
    console.log(error);
  }
}
export async function getProfessionalPayments(professionalId, state) {
  try {
    const response = await axios.get(`/payment/professional/${professionalId}`);
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}
export async function getResultProfessionalPayments(professionalId, state) {
  try {
    const response = await axios.get(
      `/payment/professionalPayment/${professionalId}`
    );
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserPayments(userId, state) {
  try {
    const response = await axios.get(`/payment/user/${userId}`);
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getResultUserPayments(userId, state) {
  try {
    const response = await axios.get(`/payment/userPayment/${userId}`);
    return state(response?.data);
  } catch (error) {
    console.log(error);
  }
}
// export default async function postImageCloudinary(file, image) {

//       try{
//           const imageUpload = await axios.post('img/upload', (file, image) )
//           return imageUpload
//       }catch(error){
//         console.log(error)
//       }

// }

export async function autoLoginAfterPostRegister(token) {
  localStorage.setItem("profTkn", token);
  window.location.pathname = "/";
  window.location.reload();
}

export async function getAllUser(state) {
  try {
    const peticion = await axios.get("/user");
    state(peticion.data);
  } catch (error) {
    errorMenssage(error.response.data);
  }
}
export async function getAllProfessionals(state) {
  try {
    const peticion = await axios.get("/professional");
    state(peticion.data);
  } catch (error) {
    errorMenssage(error.response.data);
  }
}

export async function verifyTokenForgotPassword(token) {
  try {
    const request = await axios.get("/professional/token/forgetPassword", {
      headers: { reset: `Bearer ${token}` },
    });
    return request;
  } catch (error) {
    return error;
  }
}
export async function forgotPasswordProfessional(token, body) {
  try {
    const request = await axios.put(
      "/professional/ChangePasswordForget",
      body,
      {
        headers: { reset: `Bearer ${token}` },
      }
    );
    return request;
  } catch (err) {
    return err;
  }
}
export async function forgotPasswordUser(token, body) {
  try {
    const request = await axios.put("/user/ChangePasswordForget", body, {
      headers: { reset: `Bearer ${token}` },
    });
    return request;
  } catch (err) {
    return err;
  }
}

export async function sendEmailForgetPassUser(body) {
  try {
    const request = await axios.put(`/user/forget-password`, body);
    return request?.data;
  } catch (err) {
    return err;
  }
}

export async function sendEmailForgetPassProfessional(body) {
  try {
    const request = await axios.put(`/professional/forget-password`, body);
    return request?.data;
  } catch (err) {
    return err;
  }
}
