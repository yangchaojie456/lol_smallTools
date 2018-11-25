var fs = require("fs");
var http = require('http');  
var qs = require('querystring');  

// 当前游戏版本
var version = ''
// 异步读取
fs.readFile('http://lol.qq.com/biz/hero/champion.js', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
 });
 return false;

getChampionFromTencent()


// 请求腾讯的英雄资料
function getChampionFromTencent(){
    //这是需要提交的数据  
    var data = {      
        t: new Date().getTime()
    };
    var content = qs.stringify(data);  
      
    var options = {  
        hostname: 'lol.qq.com',  
        path: '/biz/hero/champion.js',
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
            fs.writeFile('ChampionTencent.js', str+'module.exports=LOLherojs', function(err) {
                if (err) {
                    return console.error(err);
                }
                var ChampionTencent = require('./ChampionTencent.js')
                console.log(ChampionTencent)
                var data = ChampionTencent.champion
                console.log('key和英雄命：'+data.keys)
                console.log('英雄数据：'+data.data)
                console.log('版本：'+data.version)
                version = data.version
                console.log('更新时间'+data.updated)
                getChampionFromUS(version,data.data)
            })
        })
    });  
      
    
    req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
    });  
      
    req.end();
}

// 获取美服带英雄属性的英雄列表
function getChampionFromUS(version,championData){
    // https://ddragon.leagueoflegends.com/cdn/8.23.1/data/en_US/champion.json
    //这是需要提交的数据  
    var data = {      
        t: new Date().getTime()
    };
    var content = qs.stringify(data);  
      
    var options = {  
        hostname: 'ddragon.leagueoflegends.com',  
        path: '/cdn/'+version+'/data/en_US/champion.json',
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
            fs.writeFile('ChampionUS.json', str, function(err) {
                if (err) {
                    return console.error(err);
                }
                var ChampionTencent = require('./ChampionUS.json')
                console.log(ChampionTencent)
                
                console.log('类型：'+ChampionTencent.type)
                console.log('英雄数据：'+ChampionTencent.data)
                console.log('版本：'+ChampionTencent.version)
                version = ChampionTencent.version
                console.log('格式：'+ChampionTencent.format)
                // 把中文名字对应到美服上
                var data = ChampionTencent.data
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        
                        console.log(championData[key].name)
                        data[key].name = championData[key].name
                        data[key].title = championData[key].title
                    }
                }
                console.log(data)
                fs.writeFile('champion.json',JSON.stringify(ChampionTencent), function(err) {
                    if (err) {
                        return console.error(err);
                    }

                })
            })
        })
    });  
      
    
    req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
    });  
      
    req.end();
}

function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    str = unescape(str);
    str = str.replace(/%\//g, '/')
    str = str.replace(/梅贾的窃魂窃魂卷/g, '梅贾的窃魂卷')
    
    return str
}
