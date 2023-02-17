const checkUndefined = (input) => {
    if (!input?.length) return true;
    for (let el in input) {
      if (input[el] === undefined) {
        return true;
      }
      return false;
    }
  };
  
  const checkZero = (arr) => {
    return arr.find((el) => Number(el) === 0); // comprueba si es 0
  };
  
  
  const checkNaN = (arr) => {
    return arr.filter((el) => isNaN(Number(el))).length; // comprueba si es NaN
  };
  
  
  const checkNegatives = (arr) => {
    return arr.filter((el) => Number(el) < 0).length; // comprueba si es negatives
  };
  
  const validate = (input) => {
   const errors = {};
    const {
        precio,
        titulo,
        stock,
        detalle,
        imagen,
        Marcas,
        categorias
    } = input;
    console.log(input);
 //check undefined
 if (checkUndefined(Marcas)) {
    errors.temp = "selected brands pls :(";
  }
 if (checkUndefined(categorias)) {
    errors.temp = "selected category pls :(";
  }
  //check name
  if (titulo.length > 50) {
    errors.name = "Name must be max 50 characters";
  } else if (titulo?.length < 4) {
    errors.name = "Name must be at least 4 characters";
  }
  if (detalle.length > 50) {
    errors.name = "details must be max 50 characters";
  } else if (detalle?.length < 4) {
    errors.name = "details must be at least 4 characters";
  }
  if (imagen.length < 50) {
    errors.name = "select file pls";
  }
  //check negatives
  if (checkNegatives([precio,stock])) {
    errors.precio = "Negative numbers are not valid price";
  }
  //check number type
  else if (checkNaN([precio,stock])) {
    errors.nan = "The weight, height and life span inputs must be a number";
  }
  //check min
  if (checkZero([precio,stock])) {
    errors.zero = "The value must be greater than zero";
  }

  return errors;


  };
  
  export default validate;