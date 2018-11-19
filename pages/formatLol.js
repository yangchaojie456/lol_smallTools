var fs = require("fs");

// 异步读取
fs.readFile('lolItem.js', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString() )
   fs.writeFile('input.js', decodeUnicode(data.toString()),  function(err) {
    if (err) {
        return console.error(err);
    }
    
 });
});

function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    str = unescape(str);
    str = str.replace(/%\//g,'/')
    return str
}