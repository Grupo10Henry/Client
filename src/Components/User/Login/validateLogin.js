// Juli >>>>>>>>

const validateLogin = (input) => {
  let errors = {};
  
  if (!input.email) {
    errors.email = "Campo obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "Email inválido";
  }

  if (!input.password) {
    errors.password = "Campo obligatorio";
  } else if (input.password.length < 8 || input.password.length > 15) {
    errors.password = "La contraseña debe tener entre 8 y 15 caracteres";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  } else if (!/(?=.*[A-Z])/.test(input.password)) {
    errors.password = "La contraseña debe contener al menos una mayúscula";
  } else if (!/(?=.*[a-z])/.test(input.password)) {
    errors.password = "La contraseña debe contener al menos una minúscula";
  }


  return errors;
};

export default validateLogin;
