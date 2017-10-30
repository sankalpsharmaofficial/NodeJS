var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/goto', function(req, res, next) {
    res.render('index', { title: 'CSU East Bay' });
});

module.exports = router;
