const express = require('express');
const router = express.Router();

const shortenLinkActions = require('../components/api/shortenlinks');

router.get('/', shortenLinkActions.saveURL);



module.exports = router;