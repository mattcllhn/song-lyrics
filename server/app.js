var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var path = require('path');

app.listen('3000', function(){
  console.log('listening on 3000');
});
app.get('/',function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});//app.get




app.get('/scrape',function(req,res){
var  url = 'http://www.azlyrics.com/lyrics/michaelwsmith/amazinggrace.html';

request(url, function(error, response, html){
  var objectToSend = {title:"", lyrics:{}};
    if(!error){
        var $ = cheerio.load(html);

          objectToSend.title = $('.ringtone').next().text();
          console.log('this is the title',objectToSend.title);
          var unformattedLyrics = JSON.stringify($('.ringtone').next().next().next().next().text());


          for (var i = 0; i < unformattedLyrics.length; i++) {
            // console.log('index',unformattedLyrics[i]+unformattedLyrics[i+1]);
            if(unformattedLyrics[i]+unformattedLyrics[i+1]=='/n'){

              console.log('lyric added to bar');

            }else if(unformattedLyrics[i]=='/' && unformattedLyrics[i+1]=='n'&& unformattedLyrics[i+2]=='/'){
              console.log('new bar');
            }
          }//for loop
          // console.log('unformattedLyrics',JSON.stringify(unformattedLyrics));
          // console.log('these are the lyrics'+objectToSend.lyrics+'which is: '+ typeof(objectToSend.lyrics));

        }//if bracket
        res.send(objectToSend);
      });//request
});//scrape url
app.use(express.static('public'));
