


export function validate(form) {
    let errors = {};
    if (!form.email || !form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)) {
      errors.email = "Debe introducir un formato de e-mail válido";
    }
    if (
      form.password.trim().length < 8 ||
      !form.password.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
    ) {
      errors.password =
        "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minúscula y un número";
    }
    return errors;
  }