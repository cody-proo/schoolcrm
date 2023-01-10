const {
  createSchool,
  getAllSchools,
  singleSchool,
  deleteSchool,
  updateSchool,
} = require("../controllers/school.controller");
const {
  createSchoolDTO,
  updateSchoolDTO,
} = require("../validators/school.validator");
const { HttpVerb } = require("../constants/httpVerb.constants");

const userRoutes = {
  ["/api/schools"]: [
    {
      path: "/",
      handler: createSchool,
      dto: createSchoolDTO,
      method: HttpVerb.Post,
    },
    {
      path: "/",
      handler: getAllSchools,
      method: HttpVerb.Get,
    },
    {
      path: "/:id",
      handler: singleSchool,
      method: HttpVerb.Get,
    },
    {
      path: "/:id",
      handler: deleteSchool,
      method: HttpVerb.Delete,
    },
    {
      path: "/:id",
      handler: updateSchool,
      method: HttpVerb.Patch,
      dto: updateSchoolDTO,
    },
  ],
};

module.exports = userRoutes;
