require("dotenv").config();
const joi = require("joi");

const envConfigs = {
  port: +process.env.PORT,
  databaseUrl: process.env.DB_URL,
};

const envValidationConfigs = joi.object().schema({
  port: joi.number().required(),
  databaseUrl: joi.string().required(),
});

envValidationConfigs.validate(envConfigs);

module.exports = envConfigs;
