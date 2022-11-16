const express = require('express');
const router = express.Router();

const componentTest = require('../components/api/test');

router.get('/', componentTest.homepage);



module.exports = router;