console.log('JS');
var myApp = angular.module('myApp',[]);

  myApp.controller("scrapeController",['$scope','$http',function($scope,$http){
    console.log('NG');
    $scope.scrape = function(artistName,songName){
      
      // console.log('artistName: '+encodeURIComponent(artistName)+' songName: '+encodeURIComponent(songName));


      var objectToSend = {
        artist:spaceRemover(artistName),
        song:spaceRemover(songName)
        };
  $http({
    method:"GET",
    url:"/scrape",
    params:objectToSend
  }).then(function(res){
    // console.log("res back",res.data);
    $scope.song = quotationRemover(res.data);
    $scope.lyrics = duplicateRemover(res.data.lyrics);
  });//.then function
};//$scope.scrape
  }]);//scrapecontroller



  function spaceRemover(data){
    inputText = data || '';
    inputText = inputText.replace(/\s/g, '');
    // console.log(data);
    return inputText;
  }//spaceRemover

  function quotationRemover(song){
    song.title = song.title.replace(/\"/g, '');
    return song;
  }//quotationRemover

  function duplicateRemover(lyrics){
    var seen = {};
      return lyrics.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  }//duplicateRemover
