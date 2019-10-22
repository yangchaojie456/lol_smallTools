var LOLitemjs = null

var LOLitemData = null

var currentMapValue = 'zhsxg'
var currentTagsValue = []

// 对象转数组
function ObjToArray(LOLitemData){
  var LOLitemDataArr = []
  for (const key in LOLitemData) {
    LOLitemDataArr.push({
      [key]:LOLitemData[key]
    })  
  }
  return LOLitemDataArr
}
/**
 * 根据地图，属性过滤出还可选取的武器属性
 * @param {String} map 地图
 * @param {Array} tags 装备属性
 */
function filterToCanSelect(map,tags){
  var cMap = 11
  var cLOLitemTags = []
  if (map == 'zhsxg') {
    cMap = 11
  } else if (map == 'jddld') {
    cMap = 12
  } else if (map == 'nqcl') {
    cMap = 10
  }
  for (const key in LOLitemData) {
    if(LOLitemData.hasOwnProperty(key)){
      
      var cItem = LOLitemData[key]
      if(true){

        if(cItem.tags.length>tags.length){
          var flag = true
          for(var i = 0 ; i <tags.length;i++){
            if(!cItem.tags.includes(tags[i])){
              flag = false
            }
          }
          if(flag){
            cLOLitemTags = cLOLitemTags.concat(LOLitemData[key].tags) 
          }
        }

        
      }
    }
  }
  cLOLitemTags = [...new Set(cLOLitemTags)]
  return cLOLitemTags
}
/**
 * 根据地图，属性过滤装备
 * @param {String} map 地图
 * @param {Array} tags 装备属性
 * @param {Boolean} union 取装备属性的并集还是交集
 */
function filterEquip(map,tags,union){
  var cMap = 11
  var cLOLitemData = {}
  if (map == 'zhsxg') {
    cMap = 11
  } else if (map == 'jddld') {
    cMap = 12
  } else if (map == 'nqcl') {
    cMap = 10
  }
  // 一个武器属性时
  if(!tags || tags.length==0){
    for (const key in LOLitemData) {
      if(LOLitemData.hasOwnProperty(key)){
        
        var cItem = LOLitemData[key]
        if(true){
          cLOLitemData[key] = LOLitemData[key]
        }
      }
    }
  }else if(tags.length==1){
    for (const key in LOLitemData) {
      if(LOLitemData.hasOwnProperty(key)){
        
        var cItem = LOLitemData[key]
        if(true&&cItem.tags.includes(tags[0])){
          cLOLitemData[key] = LOLitemData[key]
        }
      }
    }
  }else if(tags.length>1){
    for (const key in LOLitemData) {
      if(LOLitemData.hasOwnProperty(key)){
        
        var cItem = LOLitemData[key]
        if(true){
          
          // 交集还是并集 默认交集
          if(!union){

            if(cItem.tags.length>tags.length){
              var flag = true
              for(var i = 0 ; i <tags.length;i++){
                if(!cItem.tags.includes(tags[i])){
                  flag = false
                }
              }
              if(flag){
                cLOLitemData[key] = LOLitemData[key]
              }
            }
            
          }else{
            
              var flag = false
              for(var i = 0 ; i <tags.length;i++){
                if(cItem.tags.includes(tags[i])){
                  flag = true
                  break;
                }
              }
              if(flag){
                cLOLitemData[key] = LOLitemData[key]
              }
            
          }

        }
      }
    }
  }
  
  return ObjToArray(cLOLitemData)
}
// 价格从低到高
function sortPrice(a,b){
  var itema = Object.values(a)[0]
  var itemb = Object.values(b)[0]
  return itema.gold.total-itemb.gold.total
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 多选checkbox
    selectItems:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    LOLitemjs = wx.getStorageSync('equipList')

    LOLitemData = LOLitemjs.data
    
    var that = this
    
    this.setData({
      lolData: filterEquip(currentMapValue,currentTagsValue).sort(sortPrice),
      currentMap: currentMapValue,
      currentTags:'ALL'
    })
    
    wx.getSystemInfo({
      success: function(res) {
        
        that.setData({
          availableHeight: res.windowHeight
        })
      },
    })
  },
  onChooseMap(e) {
    var map = e.currentTarget.dataset.map
    this.setData({
      currentMap:map
    })
    currentMapValue = map
    
    this.setData({
      lolData: filterEquip(currentMapValue,currentTagsValue).sort(sortPrice),
    })
  },
  /**
   * 选类别
   */
  onChangeItem(e){
    
    var tag = e.target.dataset.tags
    if(tag){
      
 
      if(tag[0] == 'ALL'){
        currentTagsValue = []
      }else if(tag[0] =='START'){
        // Jungle Lane
        currentTagsValue = ['Jungle', 'Lane']
      }else if(tag[0] =='TOOLS'){
        // "GoldPer", "Consumable", "Vision"
        currentTagsValue =["GoldPer", "Consumable", "Vision"]
      }else if(tag[0] =='DEFENSE'){
        // "Health", "HealthRegen", "Armor", "SpellBlock"
        currentTagsValue=["Health", "HealthRegen", "Armor", "SpellBlock"]
      }else if(tag[0] =='ATTACK'){
        // "LifeSteal", "CriticalStrike", "AttackSpeed", "Damage"
        currentTagsValue =["LifeSteal", "CriticalStrike", "AttackSpeed", "Damage"]
      }else if(tag[0] =='MAGIC'){
        // "Mana", "SpellDamage", "CooldownReduction", "ManaRegen"
        currentTagsValue=["Mana", "SpellDamage", "CooldownReduction", "ManaRegen"]
      }else if(tag[0] =='MOVEMENT'){
        // "Boots", "NonbootsMovement"
        currentTagsValue =["Boots", "NonbootsMovement"]
      }
      else{
        currentTagsValue = tag
      }
      
      this.setData({
        lolData:filterEquip(currentMapValue,currentTagsValue,true).sort(sortPrice),
        currentTags:tag[0],
        selectItems:[]
      })
    }
    
  },
  checkboxChange(e){
    var selectItems = e.detail.value
    
    this.setData({
      currentTags:'',
      selectItems:selectItems,
      lolData:filterEquip(currentMapValue,selectItems).sort(sortPrice),
      canSelect:filterToCanSelect(currentMapValue,selectItems)
    })

  },
  toEquipDetail(e){
    
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/equipmentDetail/equipmentDetail?index='+index+'&map='+currentMapValue,
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
