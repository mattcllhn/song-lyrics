function lyricFormatter(dataIn){
  var lyrics = dataIn;
  var arrayToSend = [];
//takes out encoded apostrophes
lyrics = lyrics.replace(/&apos;/g,"'");
//takes out encoded quotation marks
lyrics = lyrics.replace(/&quot;/g,' " ');
//removes text in square brackets
lyrics= lyrics.replace(/ *\[[^\]]*]/g, '');
//removes html tags
lyrics = lyrics.replace(/<(?:.|\n)*?>/gm, '');
//removes returns
lyrics = lyrics.replace(/\r/g, '');
//formats into an array
var lyricArray = lyrics.split('\n\n');
//loop through and create subarrays out of lines
for (var i = 0; i < lyricArray.length; i++) {
  if(lyricArray[i].length>1){
  var verse = lyricArray[i].split('\n');
//clears out empty lines in verses
  var verseToSend = [];
  verse.map(function(int){
    if(int!==''){
      verseToSend.push(int);
    }
  });//map method
  arrayToSend.push(verseToSend);
  // console.log('in the loop bro \n',lyricArray[i]);
}

}//for loop
  return arrayToSend;
}
module.exports = lyricFormatter;
