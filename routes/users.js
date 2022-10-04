var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ message: 'This is json response..' });
});

module.exports = router;
