// Juli >>>>>>>>

export const validateSignUp = (user) => {
  let errors = {};
  if (!user.name) {
    errors.name = "Campo obligatorio";
  } else if (user.name.length > 15) {
    errors.name = "El nombre debe tener menos de 15 caracteres";
  } else if (!/^[A-Za-z\s]+$/.test(user.name)) {
    errors.name = "Números y caracteres especiales no permitidos";
  }

  if (!user.lastName) {
    errors.lastName = "Campo obligatorio";
  } else if (user.lastName.length > 25) {
    errors.lastName = "El apellido debe tener menos de 25 caracteres";
  } else if (!/^[A-Za-z\s]+$/.test(user.lastName)) {
    errors.lastName = "Números y caracteres especiales no permitidos";
  }

  if (!user.email) {
    errors.email = "Campo obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email inválido";
  }

  if (!user.password) {
    errors.password = "Campo obligatorio";
  } else if (user.password.length < 8 || user.password.length > 15) {
    errors.password = "La contraseña debe tener entre 8 y 15 caracteres";
  } else if (!/(?=.*[0-9])/.test(user.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  } else if (!/(?=.*[A-Z])/.test(user.password)) {
    errors.password = "La contraseña debe contener al menos una mayúscula";
  } else if (!/(?=.*[a-z])/.test(user.password)) {
    errors.password = "La contraseña debe contener al menos una minúscula";
  }

  if (!user.password2) {
    errors.password2 = "Campo obligatorio";
  } else if (user.password2 !== user.password) {
    errors.password2 = "Las contraseñas no coinciden";
  }

  if (!user.phone) {
    errors.phone = "Campo obligatorio";
  } else if (!/^\+?[0-9]+$/.test(user.phone)) {
    errors.phone = "Solo se permiten números y un símbolo '+' al principio";
  }
  
  

  if (!user.identityCard) {
    errors.identityCard = "Campo obligatorio";
  } else if (user.identityCard.length < 6 || user.identityCard.length > 15) {
    errors.identityCard = "La cédula debe tener entre 6 y 15 caracteres";
  }

  return errors;
};
