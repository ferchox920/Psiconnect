import axios from "./axios.js";
import { setFilterProfessional } from "./professionalSlice.js";

export async function userRegister(body) {
  try {
    const peticion = await axios.post(`/user/register`, body);
    return peticion;
  } catch (error) {
    return error.response;
  }
}
export async function professionalRegister(body) {
  try{
    const request = await axios.post('/professional/register',body)
    return request;
  } catch(error){
    return error.response
  }
}
export async function userLogin(body) {
  try {
    const peticion = await axios.post(`/user/login`, body);
    console.log(peticion?.data.data);
    localStorage.setItem("tkn", peticion?.data.data);
    return peticion;
  } catch (error) {
    return error.response;
  }
}
export async function changePassword(body) {
  try {
    const peticion = await axios.post(`/user/login`, body, {
      authorization: `bored: ${localStorage.getItem("tkn")}`,
    });
    console.log(peticion?.data.data);
    localStorage.setItem("tkn", peticion?.data.data);
    return peticion;
  } catch (error) {
    return error.response;
  }
}
export async function getAreas(newState) {
  try {
    const peticion = await axios.get("/areas");
    console.log(peticion.data, 'aqui')
    newState(peticion.data);
  } catch (error) {
    return error.response;
  }
}
export async function getProfessionalByAreas({ state, type, area }) {
  try {
    const peticion = await axios.get(`/areas/professional/${area}`);
    type ==='local'? state(peticion?.data) : state(setFilterProfessional(peticion?.data));
  } catch (error) {
    return error.response;
  }
}
export async function getProfessionalById(id, state) {
  try {
    const peticion = await axios.get(`/professional/${id}`);
    return state(peticion?.data);
  } catch (error) {
    return error.response;
  }
}
