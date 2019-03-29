var express = require('express');
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get('/',function(req,res){
    res.render('search')    
});


app.get("/result",(req,res) => {
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?s=' + query +'&plot=full&apikey=thewdb';
    request(url,(error,response,body) => {
        
        if(!error && response.statusCode==200){
            //var results = JSON.parse(body)
            var data = JSON.parse(body)
            res.render("result",{data: data});
           // res.send(results["Search"][0]["Title"]);
           
        }
    });
});

app.listen(3000,function(){
    console.log("movie has started");
});