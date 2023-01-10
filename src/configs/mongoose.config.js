const mongoose = require("mongoose");
const envConfigs = require("./env.config");

const mongooseConfig = () => {
  return new Promise((resolve, reject) => {
    try {
      mongoose.connect(envConfigs.databaseUrl, {
        dbName: envConfigs.databaseName,
      });
      mongoose.connection.on("open", () => {
        console.log("The database is running");
      });
      mongoose.connection.on("close", () => {
        console.log("The database closed ...");
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = mongooseConfig;
