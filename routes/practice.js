var express = require('express');
var router = express.Router();

/* GET practice page. */
router.get('/practice', function (req, res, next) {
    console.log('Entered in practice Router');
//  res.render('practice', { title: 'Practice',data:data});
  res.render('practice', {title: 'Practice'});
});

module.exports = router;
