const express = require("express");
const requestWrapper = require("../middlewares/request.middleware");
const routes = [require("./school.router"), require("./user.router")];

const router = express.Router();

routes.map((routeItem) => {
  Object.keys(routeItem).map((routeItemKey) => {
    routeItem[routeItemKey].map((route) => {
      router[route.method](
        routeItemKey.concat(route.path),
        requestWrapper(route.dto, route.handler, route.middlewares)
      );
    });
  });
});

module.exports = router;
