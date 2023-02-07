import axios from "./axios.js";
import { errorMenssage } from "./errorsModals.js";
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
export async function changePassword(body) {
  try {
    const peticion = await axios.post(`/user/login`, body, {
      headers: { authorization: `Bearer ${localStorage.getItem("tkn")}` },
    });
    console.log(peticion?.data.data);
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
export async function getOnlyAreas(state) {
  try {
    const peticion = await axios.get("/areas/onlyAreas");
    state(peticion.data);
  } catch (error) {
    return error.response;
  }
}
// export async function getProfessionalByAreas({ state, type, area }) {
//   try {
//     const peticion = await axios.get(`professional/${area}`);
//     type === "local"
//       ? state(peticion?.data)
//       : state(setFilterProfessional(peticion?.data));
//   } catch (error) {
//     return error.response;
//   }
// } 
export async function getUserByJWT({ state, type }) {
  console.log(localStorage.getItem("tkn"));
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

export async function getAreasOnly(){
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
      `/professional${area ? `/${area}` : ""}${
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
