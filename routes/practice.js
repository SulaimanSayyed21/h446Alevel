var express = require('express');
var router = express.Router();
//const fs = require('fs');

//Inside your route handler
// const jsonData = fs.readFileSync('./public/data/opposites.json', 'utf-8');
// const data = JSON.parse(jsonData);
// console.log(data);


/* GET practice page. */
router.get('/practice', function (req, res, next) {
    console.log('Entered in practice Router');
//  res.render('practice', { title: 'Practice',data:data});
  res.render('practice', {title: 'practice'});
});

module.exports = router;
