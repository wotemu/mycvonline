const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePortfolioInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.link = !isEmpty(data.link) ? data.link : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!isEmpty(data.link)) {
    if (!Validator.isURL(data.link)) {
      errors.link = "Not a valid url";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
