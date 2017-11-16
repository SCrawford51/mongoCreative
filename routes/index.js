var express = require('express');
var router = express.Router();
var request = require('request');

var taskList = [];

var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/taskDB', { useMongoClient: true }); //Connects to a mongo database called "commentDB"

var taskSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String
});

var Task = mongoose.model('task', taskSchema); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

/*Display the task list*/
router.get('/taskList', function(req, res, next) {
    console.log("In task list");
    res.send(taskList);
});

/*Add to the taskList array*/
router.post('/taskList', function(req, res, next) {
    console.log("In task post");
    console.log(req.body);
    taskList.push(req.body);
    res.end('{success" : "Updates Successfully", "status" : 200');
});

module.exports = router;
