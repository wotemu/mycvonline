const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.image = !isEmpty(data.image) ? data.image : "";

  if (!Validator.isLength(data.title, { min: 10, max: 300 })) {
    errors.text = "Text must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  /* if (Validator.isEmpty(data.image)) {
    errors.image = "Image field is required";
  } */
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
