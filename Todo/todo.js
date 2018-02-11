var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.id = 2;
    $scope.items = [{name:'homework 1', num:'1', id:'0'},{name:'homework 2', num:'2',id:'1'}];
    $scope.item_name = "";
    $scope.editing = false;

    $scope.addItem = function(item) {
        $scope.items.push(item);
        $scope.item = {};
    };

    $scope.add_list = function(){
        $scope.id++;
        console.log($scope.id);
        $scope.items.push({'name': $scope.item_name, 'num':$scope.id, 'id':--$scope.id});
        $scope.id++;

    }

    $scope.delete = function(index){
        $scope.items.splice(index, 1);
        if($scope.id > 0){
            $scope.id--;
        }
    }

}]);
