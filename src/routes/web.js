const express = require("express");
const router = express.Router();
const { getHomePage, getSamplePage } = require("../controllers/homeController");
router.get("/", getHomePage);

router.get("/viewSample", getSamplePage);
module.exports = router;
