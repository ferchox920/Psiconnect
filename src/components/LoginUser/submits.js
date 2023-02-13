import swal from "sweetalert";
import { getProfByJWT, getUserByJWT, profLogin, userLogin } from "../../features/apiPetitions";




export const submitHandler = async (e, errors, form, dispatch, closeModal) => {
    e.preventDefault();
    if (!Object.keys(errors).at(0)) {
      await userLogin(form).then((e) => {
        getUserByJWT({
          state: dispatch,
          type: "global",
        });

        swal({
          title: "Se inició sesión correctamente!",
          text: `Bienvenido `,
          icon: "success",
        })
          .then(() => closeModal(null))
          .catch((e) => console.log("error"));
      });
    } else
      swal({
        title: "Error!",
        text: Object.values(errors)[0],
        icon: "error",
      });
  };

  export const submitHandlerProf = async (e, errors, form, dispatch, closeModal) => {
    e.preventDefault();
    if (!Object.keys(errors).at(0)) {
      await profLogin(form).then((e) => {
        getProfByJWT({
          state: dispatch,
          type: "global",
        });

        swal({
          title: "Se inició sesión correctamente!",
          text: `Bienvenido `,
          icon: "success",
        })
          .then(() => closeModal(null))
          .catch((e) => console.log(e));
      });
    } else
      swal({
        title: "Error!",
        text: Object.values(errors)[0],
        icon: "error",
      });
  };


  