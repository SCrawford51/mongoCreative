var express = require('express');
var router = express.Router();
var request = require('request');

var taskList = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

/*Display the task list*/
router.get('/taskList', function(req, res, next) {
    console.log("In task list");
    res.send(taskList);
});

router.post('/taskList', function(req, res, next) {
    console.log("In task post");
    console.log(req.body);
    taskList.push(req.body);
    res.end('{success" : "Updates Successfully", "status" : 200');
});

module.exports = router;
