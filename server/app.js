var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var path = require('path');
var lyricFormatter = require('./modules/lyricFormatter');
var domTraverser = require('./modules/domTraverser');

app.listen('3000', function(){
  console.log('listening on 3000');
});
app.get('/',function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});//app.get




app.get('/scrape',function(req,res){
// var  url = 'http://www.azlyrics.com/lyrics/willienelson/amazinggrace.html';
var url = 'http://www.azlyrics.com/lyrics/jeffbuckley/hallelujah.html';
// var url = 'http://www.azlyrics.com/lyrics/rachelplatten/heyheyhallelujah.html';

request(url, function(error, response, html){
  var objectToSend = {title:"", lyrics:{}};
    if(!error){
        var $ = cheerio.load(html);
        // console.log($);
        var body = $('body').html();
        // console.log('body',body);
          objectToSend.title = $('.ringtone').next().text();
          console.log('this is the title',objectToSend.title);
        objectToSend.lyrics = lyricFormatter(domTraverser($('.ringtone')));
        // console.log(domTraverser($('.ringtone')));





        }//if
        res.send(objectToSend);
      });//request
});//scrape url
app.use(express.static('public'));
