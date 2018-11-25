var fs = require("fs");

// 召唤师峡谷的装备名集合
let zhsxgEquip = []

// 读取召唤师峡谷的列表
fs.readFile('zhsxg.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    // console.log("异步读取: " + data.toString().split('\r\n'))
    zhsxgEquip = data.toString().split('\r\n')

});
// 极地大乱斗的装备名集合
let jddldEquip = []

// 读取极地大乱斗的列表
fs.readFile('jddld.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    // console.log("异步读取: " + data.toString().split('\r\n'))
    jddldEquip = data.toString().split('\r\n')

});

// 扭曲丛林的装备名集合
let nqclEquip = []

// 读取扭曲丛林的列表
fs.readFile('nqcl.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    // console.log("异步读取: " + data.toString().split('\r\n'))
    nqclEquip = data.toString().split('\r\n')

});

let lolItemData = ''
    // 异步读取
fs.readFile('lolItem.js', function(err, data) {
    if (err) {
        return console.error(err);
    }
    // console.log("异步读取: " + data.toString())
    lolItemData = decodeUnicode(data.toString())

    zhsxgEquip.forEach(item=>{
        // console.log(lolItemData.includes(item))
        if(!lolItemData.includes(item)){
            console.log('召唤师峡谷装备问题：'+item)
        }
    })
    jddldEquip.forEach(item=>{
        // console.log(lolItemData.includes(item))
        if(!lolItemData.includes(item)){
            console.log('极地大乱斗装备问题：'+item)
        }
    })
    nqclEquip.forEach(item=>{
        // console.log(lolItemData.includes(item))
        if(!lolItemData.includes(item)){
            console.log('扭曲丛林装备问题：'+item)
        }
    })
    

    fs.writeFile('output.js', decodeUnicode(data.toString()), function(err) {
        if (err) {
            return console.error(err);
        }
        // if (map == 'zhsxg') {
        //     cMap = 11
        //   } else if (map == 'jddld') {
        //     cMap = 12
        //   } else if (map == 'nqcl') {
        //     cMap = 10
        //   }
        var equipAll = require('./output.js')
        for (const key in equipAll.data) {
            if (equipAll.data.hasOwnProperty(key)) {
                const element = equipAll.data[key];
                // console.log(element.name)

                if(zhsxgEquip.includes(element.name)){
                    element.maps[11] = true
                }else{
                    element.maps[11] = false
                }
                if(jddldEquip.includes(element.name)){
                    element.maps[12] = true
                }else{
                    element.maps[12] = false
                }
                if(nqclEquip.includes(element.name)){
                    element.maps[10] = true
                }else{
                    element.maps[10] = false
                }

                
            }
        }
        // console.log(equipAll)
        fs.writeFile('newLOL.js', 'module.exports = '+JSON.stringify(equipAll), function(err) {
            if (err) {
                return console.error(err);
            }
        })
    });
});

function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    str = unescape(str);
    str = str.replace(/%\//g, '/')
    str = str.replace(/梅贾的窃魂窃魂卷/g, '梅贾的窃魂卷')
    
    return str
}
