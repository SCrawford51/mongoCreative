var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var Task = mongoose.model('Task');

router.get('/taskList', function (req, res, next) {
    Task.find(function (err, taskList) {
        if (err) { return next(err); }
        res.json(taskList);
    });
});

router.post('/taskList', function (req, res, next) {
    var task = new Task(req.body);
    task.save(function (err, task) {
        if (err) { return next(err); }
        res.json(task);
    });
});

router.param('task', function (req, res, next, id) {
    console.log("In param function");
    var query = Task.findById(id);
    console.log("query: ", query);
    query.exec(function (err, task) {
        if (err) { return next(err); }
        if (!task) { return next(new Error("can't find task")); }
        req.task = task;
        return next();
    });
});

router.get('/taskList/:task', function (req, res) {
    console.log("In get: ", req.task);
    res.json(req.task);
});

router.delete('/taskList/:task', function (req, res) {
    console.log("In Delete");
    console.log(req.task);
    req.task.remove();
    res.sendStatus(200);
});

module.exports = router;
