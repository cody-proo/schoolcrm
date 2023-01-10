const joi = require("joi");

const createSchoolDTO = joi.object({
  name: joi.string().required(),
  location: joi.string().required(),
  code: joi.string().required(),
  areaCode: joi.string().required(),
  options: joi.object().required(),
});

const updateSchoolDTO = joi.object({
  name: joi.string().optional(),
  location: joi.string().optional(),
  code: joi.string().optional(),
  areaCode: joi.string().optional(),
  options: joi.object().optional(),
});

module.exports = { createSchoolDTO, updateSchoolDTO };
