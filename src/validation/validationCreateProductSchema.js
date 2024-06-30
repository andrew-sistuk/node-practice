import Joi from 'joi';

export const validationCreateProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  description: Joi.string(),
}).messages({
  'string.base': 'Field {#label} must be a string.',
  'string.empty': 'Field {#label} cannot be empty.',
  'string.email': 'Field {#label} must be a valid email address.',
  'string.pattern.base': 'Field {#label} must be in the format 000-000-00-00',
  'any.required': 'missing required {#label} field',
  'number.base': 'Field {#label} must be a number.',
});
