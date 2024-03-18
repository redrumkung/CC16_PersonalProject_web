import Joi from "joi";
import validate from "../../../utils/validate";

const createSchema = Joi.object({
    date: Joi.date().iso().required().messages({
        'any.required': 'Date is required'
      }),
      destination: Joi.string().required().messages({
        'any.required': 'Destination is required'
      }),
      price: Joi.number().min(0).required().messages({
        'any.required': 'Price is required'
      }),
      available: Joi.number().integer().required().messages({
        'any.required': 'Available is required'
      }),
      coverImage: Joi.string().required().messages({
        'any.required': 'Cover Image is required'
      })
});

export const validateCreate = (input) => validate(createSchema)(input);
// export default {validateCreate};
