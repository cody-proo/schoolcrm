const { HttpVerb } = require("../constants/httpVerb.constants");
const {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
} = require("../controllers/user.controller");
const {
  createUserDTO,
  updateUserDTO,
} = require("../validators/user.validator");

const userRoutes = {
  "/api/users": [
    {
      path: "/",
      handler: createUser,
      dto: createUserDTO,
      method: HttpVerb.Post,
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
