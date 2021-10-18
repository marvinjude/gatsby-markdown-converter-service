const express = require("express");
const router = express.Router();

const { mdToHtmlController } = require("../controllers/converter");

router.post("/md-to-html", mdToHtmlController);

module.exports = router;
