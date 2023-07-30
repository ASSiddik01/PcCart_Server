const express = require("express");
const router = express.Router();
const proCatRoute = require("../modules/proCat/proCat.route");
const productRoute = require("../modules/product/product.route");

const appRoutes = [
  {
    path: "/proCat",
    route: proCatRoute,
  },
  {
    path: "/product",
    route: productRoute,
  },
];

appRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
