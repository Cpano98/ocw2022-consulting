var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "HOME — Build once. Deploy anywhere." });
});

router.get("/solutions", function (req, res, next) {
  res.render("page1", { title: "SOLUTIONS — Build once. Deploy anywhere." });
});

router.get("/news", function (req, res, next) {
  res.render("page2", { title: "NEWS — Build once. Deploy anywhere." });
});

router.get("/community", function (req, res, next) {
  res.render("page3", { title: "COMMUNITY — Build once. Deploy anywhere." });
});

router.get("/contact", function (req, res, next) {
  res.render("page4", { title: "CONTACT — Build once. Deploy anywhere." });
});

router.get("/services", function (req, res, next) {
  res.render("services.ejs", { title: "SERVICES — Build once. Deploy anywhere." });
});

module.exports = router;
