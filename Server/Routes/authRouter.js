const express = require('express');
const { Authenticate } = require('../Controllers/authController');
const router = express.Router();


router.route('/')
.post(Authenticate)





module.exports = router;