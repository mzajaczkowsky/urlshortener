const express = require('express');
const router = express.Router();

const linkActions = require('../components/api/urlActions');

router.get('/:r', linkActions.redirectURL);
router.get('/r/:id', linkActions.getURL);
router.post('/r', linkActions.saveURL);


module.exports = router;