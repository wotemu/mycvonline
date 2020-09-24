const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSkillsInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.level = !isEmpty(data.level) ? data.level : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.level)) {
    errors.level = "Level field is required";
  }
  if (!Validator.isNumeric(data.level)) {
    errors.level = "Level needs to a number between 1 and 100";
  }

  if (Validator.isNumeric(data.level)) {
    if (data.level < 1 || data.level > 100) {
      errors.level = "Level value needs to a number between 1 and 100";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
