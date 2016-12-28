function lyricFormatter(dataIn){
  var lyrics = dataIn;
  var arrayToSend;
//takes out apostrophes
lyrics = lyrics.replace(/&apos;/g,"'");
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
  lyricArray[i] = lyricArray[i].split('\n');
  console.log('in the loop bro \n',lyricArray[i]);


}//for loop
  return lyricArray;
}
module.exports = lyricFormatter;
