var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//http://127.0.0.1:3000/kat
router.get('/kat',function(req,res,next){
  res.send('hello kat')
});

module.exports = router;
