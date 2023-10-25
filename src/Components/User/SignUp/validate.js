// Juli >>>>>>>>

export const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Campo obligatorio";
  } else if (input.name.length > 15) {
    errors.name = "El nombre debe tener menos de 15 caracteres";
  } else if (!/^[A-Za-z\s]+$/.test(input.name)) {
    errors.name = "Números y caracteres especiales no permitidos";
  }

  if (!input.lastName) {
    errors.lastName = "Campo obligatorio";
  } else if (input.lastName.length > 25) {
    errors.lastName = "El apellido debe tener menos de 25 caracteres";
  } else if (!/^[A-Za-z\s]+$/.test(input.lastName)) {
    errors.lastName = "Números y caracteres especiales no permitidos";
  }

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

  if (!input.password2) {
    errors.password2 = "Campo obligatorio";
  } else if (input.password2 !== input.password) {
    errors.password2 = "Las contraseñas no coinciden";
  }

  if (!input.phone) {
    errors.phone = "Campo obligatorio";
  } else if (!/^[0-9]+$/.test(input.phone)) {
    errors.phone = "Solo se permiten números";
  }

  if (!input.dob) {
    errors.dob = "Campo obligatorio";
  } else if (!/^[0-9]+$/.test(input.dob)) {
    errors.dob = "Formato de fecha: DD/MM/AAAA - Solo se permiten números";
  }

  if (!input.identityCard) {
    errors.identityCard = "Campo obligatorio";
  } else if (input.identityCard.length < 6 || input.identityCard.length > 15) {
    errors.identityCard = "La cédula debe tener entre 6 y 15 caracteres";
  }

  return errors;
};
