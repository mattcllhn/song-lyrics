console.log('JS');
var myApp = angular.module('myApp',[]);

  myApp.controller("scrapeController",['$scope','$http',function($scope,$http){
    console.log('NG');
    $scope.scrape = function(artistName,songName){
      // console.log('artistName: '+artistName+' songName: '+songName);
  $http({
    method:"GET",
    url:"/scrape"
  }).then(function(res){
    console.log("res back",res.data);
    var formattedResponse = duplicateRemover(res.data.lyrics);
    console.log('formattedResponse', formattedResponse);
    $scope.song = res.data;
    // console.log('scope.song',$scope.song);
  });//
    };
  }]);//scrapecontroller


  function duplicateRemover(lyrics){
    var response = [];
    var loopArray = lyrics;
    // console.log(loopArray);
    //loops through  verse blocks
    for (var i = 0; i < loopArray.length; i++) {
      for (var jj = 0; jj < loopArray.length; jj++) {
        if(loopArray[i][0]==loopArray[jj][0]){
          console.log(loopArray[i]+' \n<\nMATCHES\n>\n '+loopArray[jj]);
        }
      }
      // if(loopArray[i]!==loopArray[i+1]){
      //   console.log(loopArray[i][0]+' does not equal '+loopArray[i+1][0]);
      //   response.push(loopArray[i]);
      // }
    }//for loop
    return response;
  }//duplicateRemover
