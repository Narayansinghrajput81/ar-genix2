const express = require("express");
const router = express.Router();

const rateLimiter = require("../middleware/rateLimiter");
const validator = require("../middleware/validator");
const { receiveData } = require("../controllers/data.controller");

router.post("/data", rateLimiter, validator, receiveData);
router.get("/test", rateLimiter, validator, receiveData);
module.exports = router;
