// pages/equipment/equipment.js
var WxParse = require('../../wxParse/wxParse.js');
var description = ''
var LOLitemjs = require('./lolItem.js')
console.log(LOLitemjs)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lolData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index)
    this.setData({
      lolData:LOLitemjs.data,
    })
    this.changeEquip({}, options.index)
    
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

  },
  // 更新装备描述
  updateEquipDes(description){
    WxParse.wxParse('description', 'html', description, this, 5);
  },
  chooseEquip(e){
    var index = e.currentTarget.dataset.index
    
    description = LOLitemjs.data[index].description
    this.updateEquipDes(description)
    this.setData({      
      desItem:index
    })
    if (LOLitemjs.data[index].into){
      this.setData({
        intoEquip: LOLitemjs.data[index].into
      })
    }
  },
  changeEquip(e,i){
    
    var index = e.currentTarget?e.currentTarget.dataset.index:i
    console.log(LOLitemjs.data[index])
    
    description = LOLitemjs.data[index].description
    this.updateEquipDes(description)
    this.setData({
      currentItem: index,
      desItem:index
    })
    if (LOLitemjs.data[index].into){
      this.setData({
        intoEquip: LOLitemjs.data[index].into
      })
    }
  }
})