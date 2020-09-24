const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateReferenceInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.position = !isEmpty(data.position) ? data.position : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name name field is required";
  }

  if (!isEmpty(data.email)) {
    if (!Validator.isEmail(data.email)) {
      errors.email = "Not a valid Email";
    }
  }

  if (Validator.isEmpty(data.position)) {
    errors.position = "position date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
