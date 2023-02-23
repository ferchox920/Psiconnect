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
            validationsForm.errors.areas = 'Seleccione alguna area en seleccionado de Areas'
        }else{
            delete validationsForm.errors.areas
        }
        if(!register.skills.at(0)){
            validationsForm.errors.skills = 'Seleccione alguna habilidad en seleccionado de Habilidades'
        }else{
            delete validationsForm.errors.skills
        }
        if(!register.avatar){
            validationsForm.errors.avatar = 'Seleccione alguna imagen para su foto de perfil'
        }else{
            delete validationsForm.errors.avatar
        }
        if(!register.description){
            validationsForm.errors.description = 'La descripcion es un dato necesario'
        }else if(register.description.length-10 < 0){
            validationsForm.errors.description = `La descripcion debe contener ${10-register.description.length} caracter/es mas de longitud`
        }else if(register.description.length-1500 > 0){
            validationsForm.errors.description = `La descripcion debe contener menos de ${register.description.length-1500} caracter/es de longitud`
        }else{
            delete validationsForm.errors.description
        }if(!register.price){
            validationsForm.errors.price = 'El precio es un dato necesario';
        }else if(register.price < 15){
            validationsForm.errors.price = 'El precio no debe ser menor a 15';
        }else if(register.price > 500){
            validationsForm.errors.price = "El precio no debe ser mayor a 500";

        }else{
            delete validationsForm.errors.price;
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
            if(register.avatar) delete validationsForm.errors.avatar
        }
        return validationsForm.errors
    },
    price:(register) => {
        if(!register.price){
            validationsForm.errors.price = 'El precio es una dato necesario';
        }else if(parseInt(register.price) < 15){
            validationsForm.errors.price = 'El precio debe ser mayor a 15';
        }else if(parseInt(register.price) > 500){
            validationsForm.errors.price = "El precio no debe ser mayor a 500";
        }else{
            delete validationsForm.errors.price;
        }
        return validationsForm.errors
        }
    };

  export default validationsForm;
