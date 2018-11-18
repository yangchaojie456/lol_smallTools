var LOLitemjs = require('../equipment/lolItem.js')
// console.log(LOLitemjs.data)
var LOLitemData = LOLitemjs.data
// 装备对象转化成数组 用于排序
var LOLitemDataArr = []
var currentMap = 11
// 对象转数组
for (const key in LOLitemData) {
  LOLitemDataArr.push({
    [key]:LOLitemData[key]
  })  
}

// 价格从低到高
function sortPrice(a,b){
  var itema = Object.values(a)[0]
  var itemb = Object.values(b)[0]
  return itema.gold.total-itemb.gold.total
}
LOLitemDataArr.sort(sortPrice)
console.log(LOLitemDataArr)

// 标签分类tag{}
var itemObj = {}
for (const item of LOLitemDataArr) {
  
  
  var tags = Object.values(item)[0].tags
  for(const k of tags){
    var j = k.toUpperCase()
    if(itemObj[j]){
      itemObj[j].push(Object.keys(item)[0])
    }else{
      itemObj[j] = []
    }
    
  }
}
console.log(itemObj)

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.initData('zhsxg')
    this.setData({
      currentTags:'ALL'
    })
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.windowHeight)
        that.setData({
          availableHeight: res.windowHeight
        })
      },
    })
  },
  // 设置所有物装备
  initData(map){
    var cMap = ''
    if (map == 'zhsxg') {
      cMap = 11
    } else if (map == 'jddld') {
      cMap = 12
    } else if (map == 'nqcl') {
      cMap = 10
    }
    LOLitemDataArr = LOLitemDataArr.filter((item) => {
      return Object.values(item)[0].maps[map ?cMap:11]
    })
    this.setData({
      lolData: LOLitemDataArr,
      currentMap: map?map:'zhsxg'
    })
  },
  /**
   * 选类别
   */
  onChangeItem(e){
    console.log(e)
    var tag = e.target.dataset.tags
    if(tag){
      var currentItemObj = itemObj[tag]
      var currentData = []
 
      if(tag == 'ALL'){
        currentData =LOLitemDataArr
      }else if(tag=='START'){
        // JUNGLE LANE
        currentItemObj = itemObj['JUNGLE'].concat(itemObj['LANE'])
        currentItemObj.forEach(element => {
          currentData.push({
            [element]:LOLitemData[element]
          })
        });
      }else if(tag=='TOOLS'){
        // "GOLDPER", "CONSUMABLE", "VISION"
        currentItemObj = itemObj['GOLDPER'].concat(itemObj['CONSUMABLE']).concat(itemObj['VISION'])
        currentItemObj.forEach(element => {
          currentData.push({
            [element]:LOLitemData[element]
          })
        });
      }else if(tag=='DEFENSE'){
        // "HEALTH", "HEALTHREGEN", "ARMOR", "SPELLBLOCK"
        currentItemObj = itemObj['HEALTH'].concat(itemObj['HEALTHREGEN']).concat(itemObj['ARMOR']).concat(itemObj['SPELLBLOCK'])
        currentItemObj.forEach(element => {
          currentData.push({
            [element]:LOLitemData[element]
          })
        });
      }else if(tag=='ATTACK'){
        // "LIFESTEAL", "CRITICALSTRIKE", "ATTACKSPEED", "DAMAGE"
        currentItemObj = itemObj['LIFESTEAL'].concat(itemObj['CRITICALSTRIKE']).concat(itemObj['ATTACKSPEED']).concat(itemObj['DAMAGE'])
        currentItemObj.forEach(element => {
          currentData.push({
            [element]:LOLitemData[element]
          })
        });
      }else if(tag=='MAGIC'){
        // "MANA", "SPELLDAMAGE", "COOLDOWNREDUCTION", "MANAREGEN"
        currentItemObj = itemObj['MANA'].concat(itemObj['SPELLDAMAGE']).concat(itemObj['COOLDOWNREDUCTION']).concat(itemObj['MANAREGEN'])
        currentItemObj.forEach(element => {
          currentData.push({
            [element]:LOLitemData[element]
          })
        });
      }else if(tag=='MOVEMENT'){
        // "BOOTS", "NONBOOTSMOVEMENT"
        currentItemObj = itemObj['BOOTS'].concat(itemObj['NONBOOTSMOVEMENT'])
        currentItemObj.forEach(element => {
          currentData.push({
            [element]:LOLitemData[element]
          })
        });
      }
      else{
        currentItemObj.forEach(element => {
          currentData.push({
            [element]:LOLitemData[element]
          })
        });
      }
      
      currentData.sort(function(a,b){
        var itema = Object.values(a)[0]
        var itemb = Object.values(b)[0]
        return itema.gold.total-itemb.gold.total
      })
      currentData = currentData.filter((item) => {
        return Object.values(item)[0].maps[currentMap]
      })
      this.setData({
        lolData:currentData,
        currentTags:tag,
        selectItems:[]
      })
    }
    
  },
  toEquipDetail(e){
    console.log(e)
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/equipment/equipment?index='+index,
    })
  },
  onChooseMap(e) {
    var map = e.currentTarget.dataset.map
    this.setData({
      currentMap:map
    })
    this.initData(map)
    if (map == 'zhsxg'){
      currentMap = 11
    } else if (map =='jddld'){
      currentMap = 12
    }else if(map=='nqcl'){
      currentMap = 10
    }
    var currentData = this.data.lolData.filter((item) => {
      return Object.values(item)[0].maps[currentMap]
    })
    this.setData({
      lolData: currentData
    })
  },
  checkboxChange(e){
    console.log(e)
    this.setData({
      currentTags:'',
      selectItems:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})