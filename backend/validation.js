const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const joiSchema = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  })

  // Validate with joi
  return joiSchema.validate(data)
}

const loginValidation = (data) => {
  const joiSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  })

  // Validate with joi
  return joiSchema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;