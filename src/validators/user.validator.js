const joi = require("joi");
const { UserRoles } = require("../models/user.model");

const createUserDTO = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  nationalCode: joi.string().required(),
  address: joi.string().required(),
  phoneNumber: joi.string().required(),
  mobile: joi.string().required(),
  roles: joi.array(joi.valid(Object.values(UserRoles))),
  bio: joi.string().required(),
  dateOfBirth: joi.date().required(),
  school: joi.number().required(),
  password: joi.string().required(),
  code: joi.string().required(),
});

const updateUserDTO = joi.object({
  firstName: joi.string().optional(),
  lastName: joi.string().optional(),
  nationalCode: joi.string().optional(),
  address: joi.string().optional(),
  phoneNumber: joi.string().optional(),
  mobile: joi.string().optional(),
  roles: joi.array(joi.valid(Object.values(UserRoles))).required(),
  bio: joi.string().optional(),
  dateOfBirth: joi.date().optional(),
  school: joi.number().optional(),
  code: joi.string().optional(),
});

module.exports = { createUserDTO, updateUserDTO };
