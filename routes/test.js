var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/test', function (req, res, next) {
    console.log('Entered in test Router');
  res.render('test', { title: 'Test' });
});

module.exports = router;