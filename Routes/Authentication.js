const router = require("express").Router();

router.use("/", require("./Googleauth"));

module.exports = router;