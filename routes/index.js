var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/solutions", function (req, res, next) {
  res.render("page1", { title: "Solutions" });
});

router.get("/news", function (req, res, next) {
  res.render("page2", { title: "News" });
});

router.get("/community", function (req, res, next) {
  res.render("page3", { title: "Community" });
});

router.get("/contact", function (req, res, next) {
  res.render("page4", { title: "Contact" });
});

router.get("/services", function (req, res, next) {
  res.render("page5", { title: "Services" });
});

module.exports = router;
