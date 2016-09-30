/**
 * Created by Admin on 29.09.2016.
 */



var app = angular.module('app', ['ngMaterial']);







app.controller('MainCtrl', function ($scope) {


    $scope.demo = {
        showTooltip : false,
        tipDirection : ''
    };

    $scope.demo.delayTooltip = undefined;
    $scope.$watch('demo.delayTooltip',function(val) {
        $scope.demo.delayTooltip = parseInt(val, 10) || 0;
    });







});


