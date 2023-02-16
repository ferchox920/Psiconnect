import swal from "sweetalert";
import axios from "../../../features/axios";
import { errorMenssage, successMessage } from "../../../features/errorsModals";

export async function getAllUser(state) {
  try {
    const peticion = await axios.get("/user");
    state(peticion.data);
  } catch (error) {
    errorMenssage(error.response.data);
  }
}
export async function deleteUser(id) {
  await swal({
    title: "Estas seguro?",
    text: "una vez eliminado no se recuperara el usuario!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then(async (willDelete) => {
    if (willDelete) {
      try {
        const peticion = await axios.delete(`/admin/delete-user/${id}`);
        successMessage(peticion.data);
      } catch (error) {
        errorMenssage(error.response.data);
        throw new Error(error.response.data);
      }
    } else {
      swal("El usuario se salvo!");
    }
  });
}
export async function getAllProfessionals(state) {
  try {
    const peticion = await axios.get("/professional");
    state(peticion.data);
  } catch (error) {
    errorMenssage(error.response.data);
  }
}
export async function deleteProfessionals(id) {
  await swal({
    title: "Estas seguro?",
    text: "una vez eliminado no se recuperara el usuario!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then(async (willDelete) => {
    if (willDelete) {
      try {
        const peticion = await axios.delete(`/admin/delete-professional/${id}`);
        successMessage(peticion.data);
      } catch (error) {
        errorMenssage(error.response.data);
        throw new Error(error.response.data);
      }
    } else {
      swal("El usuario se salvo!");
    }
  });
}
export async function updateStatusToUsers(id) {
  try {
    const peticion = await axios.put(`/admin/disable-user/${id}`);
    successMessage(peticion.data);
    return;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}
export async function updateStatusToAreas(id) {
  try {
    const peticion = await axios.put(`/admin/disable-area/${id}`);
    successMessage(peticion.data);
    return;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}
export async function updateStatusToProfessional(id) {
  try {
    const peticion = await axios.put(`/admin/disable-professional/${id}`);
    successMessage(peticion.data.message);
    return peticion.data.state;
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}

export async function getAllReviews(state) {
  try {
    const peticion = await axios.get("/review");
    state(peticion.data);
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}
export async function getAllPayment(state) {
  try {
    const peticion = await axios.get("/payment");
    state(peticion.data);
  } catch (error) {
    errorMenssage(error.response.data);
    throw new Error(error.response.data);
  }
}
