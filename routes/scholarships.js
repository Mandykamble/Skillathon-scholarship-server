const express = require("express");
const router = express.Router();
const { postScholarship, getAllScholarship } = require("../controller/scholarship")


router.get('/',getAllScholarship);
router.post('/',postScholarship);

module.exports = router;    