var api = require('../..//server/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contact:'',
    message:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindFormSubmit(e) {
    var _this = this
    var {contact,message} = e.detail.value
    if(!message){
      wx.showToast({
        title: '反馈内容不能为空',
        icon:'none'
      })
    }else{
      wx.request({
        url: api.feedback,
        method:'post',
        data:{
          contact,
          message
        },
        success(res){
          
          _this.setData({
            contact:'',
            message:''
          })
          wx.showToast({
            title: res.data.message,
            icon: 'none',            
          })  
            
          
        }
      })
    }
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