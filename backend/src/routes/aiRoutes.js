const express = require('express');
const getReview = require("../controllers/aiController");

const router = express.Router();


router.post("/get-review", getReview);


module.exports = router; 