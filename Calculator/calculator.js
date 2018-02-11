angular.module('CalculatorApp', [])
    .controller('CalculatorController', function ($scope) {
        // Write code simple calculator operations
        $scope.data=0;
        var value1 = 0;
        var value2 = 0;
        var expression ='';
        $scope.items = [{one:'1',two:'2',three:'3',four:'+'},
                {one:'4',two:'5',three:'6',four:'-'},
                {one:'7',two:'8',three:'9',four:'/'},
                {one:'0',two:'=',three:'clr', four:'*'}];

        $scope.editing = false;
        $scope.addItem = function(item){
            $scope.items.push(item);
            $scope.item = {};
        };

        $scope.do = function(item){
            if(check_num(item)){
                switch(item){
                    case '*':
                        expression = '*';
                        if(value1 <= 0) {
                            value1 = $scope.data;
                        }
                        else if(value2 <= 0) {
                            value2 = $scope.data;
                        }
                        $scope.data = '0';
                        break;
                    case '/':
                        expression = '/';
                        if(value1 <= 0) {
                            value1 = $scope.data;
                        }
                        else if(value2 <= 0) {
                            value2 = $scope.data;
                        }
                        $scope.data = '0';
                        break;
                    case '-':
                        expression = '-';
                        if(value1 <= 0) {
                            value1 = $scope.data;
                        }
                        else if(value2 <= 0) {
                            value2 = $scope.data;
                        }
                        $scope.data = '0';
                        break;
                    case '+':
                        expression = '+';

                        if(value1 == 0) {
                            value1 = $scope.data;
                        }
                        else if(value2 == 0) {
                            value2 = $scope.data;
                        }
                        $scope.data = '0';
                        break;
                    case '=':
                        if(value2 == 0) {
                            value2 = $scope.data;
                        }
                        var valueX = compute(parseInt(value1), parseInt(value2), expression);
                        $scope.data = valueX;
                        value1 = 0;
                        value2 = 0;
                        expression = '0';
                        break;
                    case 'clr':
                        $scope.data = '0';
                        break;
                }
            }
            else{
                if($scope.data == 0){
                    $scope.data= '';
                    $scope.data = item;
                }

                else
                    $scope.data = $scope.data + item;
            }
        }
    });

function check_num(X){
    switch(X){
        case '*':
            return true;
        case '/':
            return true;
        case '-':
            return true;
        case '+':
            return true;
        case '=':
            return true;
        case 'clr':
            return true;
        default:
            return false;
    }
}

function compute(val1, val2, exp){
    switch(exp) {
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
        case '-':
            return val1 - val2;
        case '+':
            return val1 + val2;
    }
}