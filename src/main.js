const express = require("express");
const envConfigs = require("./configs/env.config");
const mongooseConfig = require("./configs/mongoose.config");
const routers = require("./routers");

const app = express();
mongooseConfig()
  .then(() => {
    app.use(express.json());
    app.use(routers);
    app.listen(envConfigs.port, () => {
      console.log(`The server is running at port ${envConfigs.port}`);
    });
  })
  .catch(() => {
    console.log("The server couldn't run ...");
  });
