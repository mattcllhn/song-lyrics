console.log('JS');
var myApp = angular.module('myApp',[]);

  myApp.controller("scrapeController",['$scope','$http',function($scope,$http){
    console.log('NG');
    $scope.scrape = function(){
  $http({
    method:"GET",
    url:"/scrape"
  }).then(function(data){
    console.log("data back",data);
  });//
    };
  }]);//scrapecontroller
