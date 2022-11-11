export function validationUserName(input) {
  const validacion =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ 

  if (input.length > 35) return false;
  return validacion.test(input);
}



export function validationPass(input) {
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  return strongRegex.test(input);
}

// El password debe tener una letra Mayuscula, un caracter especial, un numero y minimo 8 caracteres
