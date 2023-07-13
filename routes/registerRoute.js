const express = require("express");
const router = express.Router();
const { getRegister } = require("../controllers/registerController");


router.route("/").get(getRegister);

module.exports = router;
