import axios from "./axios.js";
import { errorMenssage } from "./errorsModals.js";
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

export async function profUpdate(body){
  try {
    const petition= await axios.put('/professional/descriptionProfesional', body);
    localStorage.setItem("profTkn", petition?.data);
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
    type === "local" ? state(peticion?.data) : state(setUser({...peticion?.data, rol: 'professional'}));
  } catch (error) {
    console.log(error.response.data);
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

 export async function getProfessionalByAreas({ state, type, area }) {
  try {
    const peticion = await axios.get("/areas/onlyAreas");
    state(peticion.data);
  } catch (error) {
    return error.response;
  }
}
export async function getUserByJWT({ state, type }) {
  try {
    const peticion = await axios.get("/user/id", {
      headers: { authorization: `Bearer ${localStorage.getItem("tkn")}` },
    });
    type === "local" ? state(peticion?.data) : state(setUser(peticion?.data));
  } catch (error) {
    console.log(error.response.data);
  }
}
export async function getProfessionalById(id, state) {
  try {
    const peticion = await axios.get(`/professional/details/${id}`);
    return state(peticion?.data);
  } catch (error) {
    return error.response;
  }
}

export async function getOnlyAreas(){
  try {
    const peticion = await axios.get(`areas/onlyAreas`)
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
    type === 'local'? state(request?.data) : null;
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

export async function verifyTokenPostRegister({ type , token, state}){
  try {
    const request = await axios.get(`/token/postRegister`,{
      headers: { post: `Bearer ${token}` },
    });
    type === 'local'? state(request) : null
  } catch (error) {
    state(error.response);
  }
}

export async function confirmEmailClient({ type , token, state, userType}){
  try {
    const request = await axios.put(`/${userType}/confirmationEmail`,{},{
      headers: { confirm: `Bearer ${token}`}
    });
    type === 'local'? state(request) : null
  } catch (error) {
    state(error.response);
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


