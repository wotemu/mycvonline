const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateHobbiesInput(data) {
  let errors = {};

  data.hobby = !isEmpty(data.hobby) ? data.hobby : "";

  if (Validator.isEmpty(data.hobby)) {
    errors.hobby = "hobby field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
