var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.send('Youre so cool');
});

module.exports = router;
