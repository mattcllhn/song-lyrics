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
  console.log('in the scrape url');
  url = 'https://www.netflix.com/Login';
request(url, function(err, response,html){
  if (err) {
    console.log('there was an err');

  }else{
    console.log('there was success');
    var $ = cheerio.load(html);
    var authCode = $(".login-form > input").attr("value");
    // var title, release, rating;
    // var json = { title : "", release : "", rating : ""};
    request.post({url: url,
        form: {
            "email": "dcalla@hotmail.com",
            "password": "buster123",
            "authURL": authCode,
            "RememberMe": "on"
        },

        headers:{
            'User-Agent': "NodeScrape"
        }
      }, function(err, response, body){
            var cookies = response.headers['set-cookie'];
            console.log('response.headers',response.headers);
            request({url: "https://www.netflix.com/browse", headers: {'Cookie': cookies, 'User-Agent': "NodeScrape"}}, function(error, response, body){
                var $ = cheerio.load(body);
                // $('body').filter(function(){
                //   var data = $(this);
                //   console.log('data logged',data.children);
                var data = $("html").text();
                // console.log('data logged -------->',data);
                res.json(data);

            });

          });

      // title = data.children().first().text();
      // json.title = title;
      // console.log('json',json);
      // json.stringify(data);

    // });//body on click
  }//else
});


});//scrape url
app.use(express.static('public'));
