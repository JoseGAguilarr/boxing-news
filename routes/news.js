var express = require('express');
var router = express.Router();
const newsCtrl = require('../controllers/news')

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', newsCtrl.new)

router.post('/', newsCtrl.create)

module.exports = router;
