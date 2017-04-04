var library = angular.module('library', ['ngMaterial']);

function mainController($scope, $http) {
    $scope.formData = {};


    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.returnData =  function(){
        user = {
            name : 'Miguel',
            age : 26
        }
        $scope.user = user;
    }

}

library.controller('mainController', mainController);

