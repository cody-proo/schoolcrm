const multer = require("multer");
const envConfigs = require("./env.config");

module.exports = multer({
  storage: multer.diskStorage({
    destination: envConfigs.uploadDest,
    filename: (request, file, callback) => {
      const filename = `${new Date().getTime()}-${Math.floor(
        Math.random() * 1000000000
      )}-${file.originalname}`;
      callback(null, filename);
    },
  }),
});
