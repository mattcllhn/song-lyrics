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
// var  url = 'http://www.azlyrics.com/lyrics/willienelson/amazinggrace.html';
// var  url = 'http://www.azlyrics.com/lyrics/jeffbuckley/hallelujah.html';
var  url = 'http://www.azlyrics.com/lyrics/pink/herecomestheweekend.html';


request(url, function(error, response, html){
  var objectToSend = {title:"", lyrics:{}};
    if(!error){
        var $ = cheerio.load(html);
        // console.log($);
        var body = $('body').html();
        // console.log('body',body);
          objectToSend.title = $('.ringtone').next().text();
          // console.log('this is the title',objectToSend.title);
        objectToSend.lyrics = $('.ringtone').next().next().next().next().html();

        // console.log($('.ringtone').next().next().next().next()[0].name);
        // console.log($('.text-center').length);
          var currentElem = $('.ringtone').next();
          // console.log($('.ringtone').next($('div'))[0].name);

        for (var i = 0; i<10; i++) {
          console.log('currentElem name', currentElem[0].name);
          var tag = currentElem[0].name;
          if (tag == 'div') {
            console.log(currentElem.text());
            i=11;
          }else{
          currentElem = currentElem.next();

          }
         
        }
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
