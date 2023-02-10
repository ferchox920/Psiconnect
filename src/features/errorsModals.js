import swal from "sweetalert";

export async function errorMenssage(text){
    return swal({
        title: "Error!",
        text: text,
        icon: "error",
      })
}