var app = window.angular.module('app', [])

app.factory('taskFetcher', taskFetcher)
app.controller('mainCtrl', mainCtrl)

function taskFetcher($http) {

    var API_ROOT = '/taskList'
    return {
        get: function () {
            return $http
                .get(API_ROOT)
                .then(function (resp) {
                    return resp.data
                })
        }
    }
}

function mainCtrl($scope, taskFetcher, $http) {

    $scope.taskList = [];

    taskFetcher.get()
        .then(function (data) {
            console.log(data);
            $scope.taskList = data;
        })

    $scope.reload = function() {
        location.reload();
    }

    $scope.addTask = function () {
        var formData = $scope.Task;
        console.log(formData);
        var taskUrl = 'taskList';
        $http({
            url: taskUrl,
            method: "POST",
            data: formData
        }).success(function (data, status, headers, config) {
            console.log("Post Worked");
        }).error(function (data, status, headers, config) {
            console.log("Post Failed");
        });
    }
}