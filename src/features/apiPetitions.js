import axios from "./axios.js";
import { setFilterProfessional } from "./professionalSlice.js";
import { setUser } from "./userSlice.js";

export async function userRegister(body) {
  try {
    const peticion = await axios.post(`/user/register`, body);
    return peticion;
  } catch (error) {
    return error.response;
  }
}
export async function userLogin(body) {
  try {
    const peticion = await axios.post(`/user/login`, body);
    console.log(peticion?.data);
    localStorage.setItem("tkn", peticion?.data);
    return peticion;
  } catch (error) {
    window.alert(error.response.data);
    return error;
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
export async function getAreas(newState) {
  try {
    const peticion = await axios.get("/areas");
    newState(peticion.data);
  } catch (error) {
    return error.response;
  }
}
export async function getProfessionalByAreas({ state, type, area }) {
  try {
    const peticion = await axios.get(`/areas/professional/${area}`);
    type === "local"
      ? state(peticion?.data)
      : state(setFilterProfessional(peticion?.data));
  } catch (error) {
    return error.response;
  }
}
export async function getUserByJWT({ state, type}) {
  try {
    const peticion = await axios.get("/user/id", {
      headers: { authorization: `Bearer ${localStorage.getItem("tkn")}` },
    });
    type === "local"
      ? state(peticion?.data)
      : state(setUser(peticion?.data));
  } catch (error) {
    return window.alert('a');
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
