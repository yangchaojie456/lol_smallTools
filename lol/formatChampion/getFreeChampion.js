var fs = require("fs");
var http = require('http');  
var qs = require('querystring');  

// 当前游戏版本
var version = ''

getFreeChampionFromTencent()

// https://lol.qq.com/biz/hero/free.js?v=24&_=1542983062238
// 请求腾讯的英雄资料
function getFreeChampionFromTencent(){
    //这是需要提交的数据  
    var data = {      
        t: new Date().getTime()
    };
    var content = qs.stringify(data);  
      
    var options = {  
        hostname: 'lol.qq.com',  
        path: '/biz/hero/free.js?v=24',
        method: 'GET'  
    };  
    var str =''
    var req = http.request(options, function (res) {  
        console.log('STATUS: ' + res.statusCode);  
        console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (chunk) {  
            // console.log('BODY: ' + chunk);  
            str+=chunk
            
        });  
        res.on('end',function(e){
            // console.log(str)
            fs.writeFile('freeChampion.js', str+'module.exports=LOLherojs', function(err) {
                if (err) {
                    return console.error(err);
                }
                var freeChampion = require('./freeChampion.js')
                console.log(freeChampion)
                var data = freeChampion.free
                
                console.log('版本：'+data.version)
                version = data.version                                
            })
        })
    });  
      
    
    req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
    });  
      
    req.end();
}
