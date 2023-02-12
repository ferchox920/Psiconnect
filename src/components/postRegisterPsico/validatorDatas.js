const validationsForm = {
    errors:{},
    inputs:(register) => {
        if(!register.linkedin){
            validationsForm.errors.linkedin = 'El linkedin es un dato necesario'
        }else if(register.linkedin.slice(0,28) !== 'https://www.linkedin.com/in/'){
            validationsForm.errors.linkedin = 'El link esta mal ingresado'
        }else{
            delete validationsForm.errors.linkedin
        }
        if(!register.areas.at(0)){
            validationsForm.errors.areas = 'Seleccione alguna area'
        }else{
            delete validationsForm.errors.areas
        }
        if(!register.skills.at(0)){
            validationsForm.errors.skills = 'Seleccione alguna habilidad'
        }else{
            delete validationsForm.errors.skills
        }
        if(!register.avatar){
            validationsForm.errors.avatar = 'Seleccione alguna imagen para su foto de perfil'
        }else{
            delete validationsForm.errors.avatar
        }
        if(!register.description){
            validationsForm.errors.description = 'La descripcion es una dato necesario'
        }else if(register.description.length-10 < 0){
            validationsForm.errors.description = `La descripcion debe contener ${10-register.description.length} caracter/es mas de longitud`
        }else if(register.description.length-1500 > 0){
            validationsForm.errors.description = `La descripcion debe contener menos de ${register.description.length-1500} caracter/es de longitud`
        }else{
            delete validationsForm.errors.description
        }
        return validationsForm.errors
    },
    description:(register) => {
        if(!register.description){
            validationsForm.errors.description = 'La descripcion es una dato necesario'
        }else if(register.description.length-10 < 0){
            validationsForm.errors.description = `La descripcion debe contener ${10-register.description.length} caracter/es mas de longitud`
        }else if(register.description.length-1500 > 0){
            validationsForm.errors.description = `La descripcion debe contener menos de ${register.description.length-1500} caracter/es de longitud`
        }else{
            delete validationsForm.errors.description
        }
        return validationsForm.errors
    },
};

  export default validationsForm;
