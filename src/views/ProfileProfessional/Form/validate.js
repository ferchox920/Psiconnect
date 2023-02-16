const validationsForm = {
    errors:{},
    linkedin:(form) => {
        if(!form.linkedin){
            validationsForm.errors.linkedin = 'El linkedin es un dato necesario'
        }else if(form.linkedin.slice(0,28) !== 'https://www.linkedin.com/in/'){
            validationsForm.errors.linkedin = 'El link esta mal ingresado'
        }else{
            delete validationsForm.errors.linkedin
        }
        return validationsForm.errors
    },
    areas:(form)=>{
        if(!form.areas.at(0)){
            validationsForm.errors.areas = 'Seleccione alguna area'
        }else{
            delete validationsForm.errors.areas
        }
        return validationsForm.errors

    },
    skills: (form)=>{
        if(!form.skills.at(0)){
            validationsForm.errors.skills = 'Seleccione alguna habilidad'
        }else{
            delete validationsForm.errors.skills
        }
        return validationsForm.errors
    },
    avatar:(form)=>{
        if(!form.avatar){
            validationsForm.errors.avatar = 'Seleccione alguna imagen para su foto de perfil'
        }else if(form.avatar.type.split('/')[0] !== 'image'){
            validationsForm.errors.avatar = 'Seleccione una imagen valida'
        }else{
            delete validationsForm.errors.avatar
        }
        return validationsForm.errors
    },
    description:(form)=>{
        if(!form.description){
            validationsForm.errors.description = 'La descripcion es un dato necesario'
        }else if(form.description.length-10 < 0){
            validationsForm.errors.description = `La descripcion debe contener ${10-form.description.length} caracter/es mas de longitud`
        }else if(form.description.length-1500 > 0){
            validationsForm.errors.description = `La descripcion debe contener menos de ${form.description.length-1500} caracter/es de longitud`
        }else{
            delete validationsForm.errors.description
        }
        return validationsForm.errors
    }
   
   
};
export default validationsForm;