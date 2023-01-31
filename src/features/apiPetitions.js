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
      console.log(peticion?.data.data);
      localStorage.setItem('tkn', peticion?.data.data);
      return peticion;
    } catch (error) {
      return error.response;
    }
  }
export async function changePassword(body) {
    try {
      const peticion = await axios.post(`/user/login`,body,{
        authorization: `bored: ${localStorage.getItem('tkn')}`
      });
      console.log(peticion?.data.data);
      localStorage.setItem('tkn', peticion?.data.data);
      return peticion;
    } catch (error) {
      return error.response;
    }
  }
  