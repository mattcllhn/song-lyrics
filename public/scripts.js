console.log('JS');
var myApp = angular.module('myApp',[]);

  myApp.controller("scrapeController",['$scope','$http',function($scope,$http){
    console.log('NG');
    $scope.scrape = function(artistName,songName){
      // console.log('artistName: '+artistName+' songName: '+songName);
  $http({
    method:"GET",
    url:"/scrape"
  }).then(function(data){
    console.log("data back",data.data);
    $scope.song = data.data;
    // console.log('scope.song',$scope.song);
  });//
    };
  }]);//scrapecontroller
