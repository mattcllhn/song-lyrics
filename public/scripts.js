console.log('JS');
var myApp = angular.module('myApp',[]);

  myApp.controller("scrapeController",['$scope','$http',function($scope,$http){
    console.log('NG');
    $scope.scrape = function(artistName,songName){
      console.log('artistName: '+encodeURIComponent(artistName)+' songName: '+encodeURIComponent(songName));
  $http({
    method:"GET",
    url:"/scrape"
  }).then(function(res){
    console.log("res back",res.data);


    $scope.song = res.data;
    $scope.lyrics = duplicateRemover(res.data.lyrics);
  });//.then function
};//$scope.scrape
  }]);//scrapecontroller

  function duplicateRemover(lyrics){
    var seen = {};
      return lyrics.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  }//duplicateRemover
