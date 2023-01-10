const express = require("express");
const envConfigs = require("./configs/env.config");
const mongooseConfig = require("./configs/mongoose.config");

const app = express();
mongooseConfig()
  .then(() => {
    app.listen(envConfigs.port, () => {
      console.log(`The server is running at port ${envConfigs.port}`);
    });
  })
  .catch(() => {
    console.log("The server couldn't run ...");
  });
