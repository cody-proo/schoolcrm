const { HttpVerb } = require("../constants/httpVerb.constants");
const {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  blockUser,
  unBlockUser,
} = require("../controllers/user.controller");
const {
  createUserDTO,
  updateUserDTO,
} = require("../validators/user.validator");
const UploaderFile = require("../configs/uploader.config");

const userRoutes = {
  "/api/users": [
    {
      path: "/block/:id",
      handler: blockUser,
      method: HttpVerb.Post,
    },
    {
      path: "/unblock/:id",
      handler: unBlockUser,
      method: HttpVerb.Delete,
    },
    {
      path: "/",
      handler: createUser,
      dto: createUserDTO,
      method: HttpVerb.Post,
      middlewares: [UploaderFile.single("image")],
    },
    {
      path: "/:id",
      handler: updateUser,
      dto: updateUserDTO,
      method: HttpVerb.Patch,
    },
    {
      path: "/:id",
      handler: deleteUser,
      method: HttpVerb.Delete,
    },
    {
      path: "/:id",
      handler: getSingleUser,
      method: HttpVerb.Get,
    },
    {
      path: "/",
      handler: getAllUsers,
      method: HttpVerb.Get,
    },
  ],
};

module.exports = userRoutes;
