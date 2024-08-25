var express = require('express');
var router = express.Router();

/* GET users listing. */
// specifies a route on the express.Router object
// this route will be used when a URL of /users/ is received.
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
