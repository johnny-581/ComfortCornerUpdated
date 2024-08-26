const express = require('express');
const router = express.Router();
const phraseController = require('../controllers/phraseController');

/* GET users listing. */
// specifies a route on the express.Router object
// this route will be used when a URL of /api/ is received.
router.get('/', phraseController.getPhrase);

module.exports = router;
