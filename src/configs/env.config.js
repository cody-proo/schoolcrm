require("dotenv").config();
const joi = require("joi");

const envConfigs = {
  port: +process.env.PORT,
  databaseUrl: process.env.DB_URL,
  databaseName: process.env.DB_NAME,
};

const envValidationConfigs = joi.object().schema({
  port: joi.number().required(),
  databaseUrl: joi.string().required(),
  databaseName: joi.string().required(),
});

envValidationConfigs.validate(envConfigs);

module.exports = envConfigs;
