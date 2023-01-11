require("dotenv").config();
const joi = require("joi");

const envConfigs = {
  port: +process.env.PORT,
  databaseUrl: process.env.DB_URL,
  passwordSalt: process.env.PASSWORD_SALT,
  uploadDest: process.env.UPLOAD_DEST,
};

const envValidationConfigs = joi.object().schema({
  port: joi.number().required(),
  databaseUrl: joi.string().required(),
  passwordSalt: joi.string().required(),
  uploadDest: joi.string().required(),
});

envValidationConfigs.validate(envConfigs);

module.exports = envConfigs;
