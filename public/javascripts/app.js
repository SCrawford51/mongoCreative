var app = window.angular.module('app', [])

app.controller('mainCtrl', mainCtrl)

function mainCtrl($scope, $http, $filter) {

    $scope.taskList = [];

    $scope.getAll = function () {
        return $http.get('/taskList').success(function (data) {
            angular.copy(data, $scope.comments);
        });
    };
    $scope.getAll();

    $scope.create = function (task) {
        return $http.post('/taskList', comment).success(function (data) {
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
    }

    $scope.removeTask = function (array, index) {
        $http.delete('/taskList/' + comment._id)
            .success(function (data) {
                console.log("delete worked");
            });
        $scope.getAll();
    };
};