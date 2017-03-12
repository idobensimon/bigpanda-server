var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/comment', function(req, res) {
  db.get().collection('comments').insertOne(req.body, function(err, result) {
    if (err) return console.log(err);

    res.status(200).json({result :{comment:req.body}});

  });
})

router.get('/comments', function(req, res) {
  db.get().collection('comments').find().toArray(function(err, result) {
    if (err) return console.log(err);

    res.status(200).json({result :result});

  });
})

module.exports = router;
