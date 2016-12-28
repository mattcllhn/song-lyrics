var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var path = require('path');
var lyricFormatter = require('./modules/lyricFormatter');

app.listen('3000', function(){
  console.log('listening on 3000');
});
app.get('/',function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});//app.get




app.get('/scrape',function(req,res){
var  url = 'http://www.azlyrics.com/lyrics/willienelson/amazinggrace.html';

request(url, function(error, response, html){
  var objectToSend = {title:"", lyrics:{}};
    if(!error){
      lyricFormatter('xyz');
        var $ = cheerio.load(html);
        // console.log($);
        var body = $('body').html();
        console.log('body',body);
          objectToSend.title = $('.ringtone').next().text();
          // console.log('this is the title',objectToSend.title);
        objectToSend.lyrics = $('.ringtone').next().next().next().next().html();
        console.log('lyrics '+ objectToSend.lyrics+' which is typeof '+typeof(objectToSend.lyrics));
        objectToSend.body = body;
        // var newArray = objectToSend.lyrics.replace(/ *\[[^\]]*]/g, '');
        // console.log(newArray);
        // newArray = newArray.split('"');
        // console.log(newArray);
        // var poo = newArray.split('\r');
        // console.log(newArray);

        }//if
        res.send(objectToSend);
      });//request
});//scrape url
app.use(express.static('public'));
