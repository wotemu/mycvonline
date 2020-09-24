const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePersonalinfoInput(data) {
  let errors = {};

  data.address = !isEmpty(data.address) ? data.address : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.language = !isEmpty(data.language) ? data.language : "";

  if (Validator.isEmpty(data.address)) {
    errors.address = "address field is required";
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = "phone field is required";
  }
  if (Validator.isEmpty(data.language)) {
    errors.language = "language field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!isEmpty(data.email)) {
    if (!Validator.isEmail(data.email)) {
      errors.email = "Not a valid Email";
    }
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.github)) {
    if (!Validator.isURL(data.github)) {
      errors.github = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
