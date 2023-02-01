import axios from './axios.js'


export async function userRegister(body) {
    try {
      const peticion = await axios.post(`/user/register`,body);
      return peticion;
    } catch (error) {
      return error.response;
    }
  }
export async function userLogin(body) {
    try {
      const peticion = await axios.post(`/user/login`,body);
      localStorage.setItem('tkn', peticion);
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