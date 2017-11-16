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

function mainCtrl($scope, taskFetcher, $http, $filter) {

    $scope.taskList = [];

    taskFetcher.get()
        .then(function (data) {
            console.log(data);
            $scope.taskList = data;
        })

    $scope.addTask = function () {
        var formData = { task: $scope.Task, selected: 'false' };
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
        location.reload();
    }

    $scope.removeTask = function (array, index) {
        var newArray = array.splice(index, 1);
        var deleteUrl = 'taskList';
        $http.delete(deleteUrl, array[index]);
    };
};