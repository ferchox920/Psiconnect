import swal from "sweetalert";

export async function errorMenssage(text){
    return swal({
        title: "Error!",
        text: text,
        icon: "error",
      })
}

export async function successMessage(text){
  return swal({
    title: "genial!",
    text: text,
    icon: "success",
  })
}