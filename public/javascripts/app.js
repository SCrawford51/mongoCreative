var app = window.angular.module('app', [])

app.controller('mainCtrl', mainCtrl)

function mainCtrl($scope, $http, $filter) {

    $scope.taskList = [];

    $scope.getAll = function () {
        return $http.get('/taskList').success(function (data) {
            angular.copy(data, $scope.taskList);
        });
    };
    $scope.getAll();

    $scope.create = function (task) {
        return $http.post('/taskList', task).success(function (data) {
            $scope.taskList.push(data);
        });
    };

    $scope.addTask = function () {
        if ($scope.Task === '') { resturn; }
        console.log("In addTask with " + $scope.Task);
        $scope.create({
            task: $scope.Task,
            priority: $scope.Priority,
        });
        $scope.Task = '';
        $scope.Priority = '';
    }

    $scope.removeTask = function (task) {
        console.log("In RemoveTask");
        $http.delete('/taskList/' + task._id)
            .success(function (data) {
                console.log("delete worked");
            });
            console.log(task._id);
        $scope.getAll();
    };
};