


export const validationsForm ={
    errors : {},
    email:  (form) => {
      if(!form.email){
          validationsForm.errors.email = 'El email no puede estar vacio'
      }else if(!form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)){
          validationsForm.errors.email = "Debe introducir un formato de e-mail válido"
      }else{
          delete validationsForm.errors.email
      }
      return validationsForm.errors
  },
  password: (form) => {
    if(!form.password){
        validationsForm.errors.password = 'La contraseña no puede estar vacia'
    }else if(form.password.length>25){
        validationsForm.errors.password = 'La contraseña debe tener un largo menor a 25 caracteres'
    }else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,26}$/.test(form.password)){
        validationsForm.errors.password = `La contraseña debe tener al menos 8 caracteres, una mayuscula, una minúscula y un número`
    }else{
        delete validationsForm.errors.password
    }
    return validationsForm.errors
}
}