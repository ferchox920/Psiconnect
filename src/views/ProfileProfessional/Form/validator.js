const validationsForm = {
    errors:{},
    name:(form) => {
        if(!form.name){
            validationsForm.errors.name = 'El nombre no puede estar vacio'
        }else if(form.name.length<2){
            validationsForm.errors.name = 'El nombre debe ser mas largo que 2 letras'
        }else if(form.name.length>20){
            validationsForm.errors.name = 'El nombre debe tener menos de 20 letras de largo'
        }else  if(!form.name.match(/^(?=.{2,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i)){
            validationsForm.errors.name = "El nombre no puede tener caracteres especiales o espacios antes y después del nombre"
        }else{
            delete validationsForm.errors.name
        }
        return validationsForm.errors
    },
    lastName: (form) => {
        if(!form.lastName){
            validationsForm.errors.lastName = 'El apellido no puede estar vacio'
        }else if(form.lastName.length<4){
            validationsForm.errors.lastName = 'El apellido debe ser mas largo que 4 letras'
        }else if(form.lastName.length>20){
            validationsForm.errors.lastName = 'El apellido debe tener menos de 20 letras de largo'
        }else  if(!form.lastName.match(/^(?=.{4,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i)){
            validationsForm.errors.lastName = "El nombre no puede tener caracteres especiales o espacios antes y después del nombre"
        }else{
            delete validationsForm.errors.lastName
        }
        return validationsForm.errors
    },
    email:  (form) => {
        if(!form.email){
            validationsForm.errors.email = 'El email no puede estar vacio'
        }else if(!form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)){
            validationsForm.errors.email = "Debe introducir un formato de e-mail válido"
        }else{
            delete validationsForm.errors.email
        }
        return validationsForm.errors
    }
}
export default validationsForm