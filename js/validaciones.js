export function validarCaracteres(input, min, max) {
  if (input.value.length >= 2 && input.value.length <= 30) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarNumber(input, min, max) {
    if (input.value >= min && input.value <= max) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
