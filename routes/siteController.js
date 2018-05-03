const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyA7r3Fr-8t56EaCgD-ipOHIaekq5P_gGfg" });
});

module.exports = siteController;
