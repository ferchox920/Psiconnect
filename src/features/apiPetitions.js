import axios from "./axios.js";
import { errorMenssage, successMessage } from "./errorsModals.js";
import { setFilterProfessional} from "./professionalSlice.js";
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
    successMessage('En breves le llegara un mail').then(e => window.location.pathname = '/');

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

export async function profUpdate({state, type, payload}){
  try {
    const petition= await axios.put('/professional/update/id', payload,{
      headers: { authorization: `Bearer ${localStorage.getItem("profTkn")}` },
    } );
    type === "local" ? state(petition?.data) : state(setUser(petition?.data));
    console.log(petition?.data)
    return petition

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
    localStorage.removeItem("profTkn"),
    console.log('jaj soy un error');
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
    localStorage.removeItem("tkn"),
    console.log('soy un mapa');
  }
}
export async function getProfessionalById(id, state) {
  try {
    const peticion = await axios.get(`/professional/details/${id}`);
    console.log(peticion , 'peticion')
    return state(peticion.data);
  } catch (error) {
    return error.response;
  }
}

export async function getOnlyAreas(state){
  try {
    const peticion = await axios.get(`/areas/onlyAreas`)
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
    return error.response;
  }
}


export async function getSkills({state, type}){
  try{
    const request = await axios.get('/skills')
    state(request?.data);
  }catch(error){
    return error.response
  }
}




export async function getProfessionalReview(id, state){
  try {
    const peticion = await axios.get(`/review/${id}`)
    return state(peticion?.data)
  }catch(error) {
    return error.response
  }
}

export async function verifyTokenPostRegister(token){
  try {
    const request = await axios.get(`/professional/token/postRegister`,{
      headers: { pos: `Bearer ${token}`,}
    });
    return request;
  } catch (error) {
    return error.response;
  }
}

export async function createProfessionalReview (id, body){
    
  try {
      const createReview = await axios.post(`/review/${id}`, body)
      return createReview

  }catch (error){
    console.log(error.response.data)
  }
}


export async function requestConsultation(body){
  try {
    const peticion = await axios.post(`/payment/create-payment`, body);
    console.log(peticion.data.data.links[1].href);
    return peticion.data.data.links[1].href

  } catch (error) {
    console.log(error);
    return error.response;
  }
} 

export async function getProfessionalConsults(professionalId, state){
  try {
    const response = await axios.get(`/consult/professional/${professionalId}`)
    return state(response?.data)
  } catch (error) {
    console.log(error)
  }
}

export async function getUserConsults(userId, state){
  try {
    const response = await axios.get(`/consult/user/${userId}`)
    return state(response?.data)
  } catch (error) {
    console.log(error)
  }
}

export async function getUserById(userID, state){
  try {
    const response = await axios.get(`/user/${userID}`)
    return state(response?.data)
  } catch (error) {
    console.log(error)
  }
}
export async function postRegisterProfesional(body,token){
  try{
    const request = await axios.put('/professional/descriptionProfesional', body,{
        headers: { pos: `Bearer ${token}` },
    });
    return request
  }catch(error){
    return error
  }
};


export default async function putUserData(id, body) {
  try {
    const updateUser = await axios.put(`user/${body.id}`, body)
      return(updateUser)
  }catch(error){
    console.log(error)
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

export async function autoLoginAfterPostRegister(token){
   localStorage.setItem("profTkn", token);
   window.location.pathname='/';
   window.location.reload();
}
