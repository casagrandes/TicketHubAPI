// VALIDATION
const Joi = require('@hapi/joi');


// Register Validation
const registerValidation = (data) => {
  const schema = {
    name: Joi.string()
      .min(6)
      .max(30)
      .required(),
    email: Joi.string()
      .min(8)
      .required()
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/),
    policy: Joi.boolean()
  };
  return Joi.validate(data, schema);
};

// Login Validation
const loginValidation = (data) => {
  const schema = {
    email: Joi.string()
      .min(8)
      .required()
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .min(6)
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;