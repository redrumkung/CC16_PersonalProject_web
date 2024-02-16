import Joi from "joi";
import validate from "../../../utils/validate";

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({
    "string.empty": "first name is required",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "last name is required",
  }),
  email: 
    Joi.string().email({ tlds: false })
    .required()
    .messages({
      "string.empty": "Email address is required",
    }),

  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "Mobile number is required",
      "string.pattern.base": "Mobile number must be 10 digits"
    }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);
export default validateRegister;
