var http = require('./server/http')
var api = require('./server/api')

//app.js
App({
  onLaunch: function () {
    
    // 请求所需数据存入storage
    this.initStorage()
    
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
    

    // 获取设备信息
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systemInfo = res
      },
    })
  },
  globalData: {
    userInfo: null,
    systemInfo: null    
  },
  initStorage(){
    this.getEquipList()
    this.getChampionList()
    
  },
  // 获取装备列表
  getEquipList(){
    http({
      url:api.equip_list
    }).then(res=>{
      console.log('装备列表',res)
      wx.setStorage({
        key:"equipList",
        data:res.data
      })
    })
  },
  // 获取英雄列表
  getChampionList(){
    http({
      url:api.champion_list
    }).then(res=>{
      console.log('英雄列表',res)
      wx.setStorage({
        key:"championList",
        data:res.data
      })
    })
  },
  // 获取周免英雄
  getWeekFree(){
    return http({
      url:api.champion_free
    })    
  },
  // 获取版本变动
  getVersionList() {
    return http({
      url: api.version_list
    })
  },
  
})