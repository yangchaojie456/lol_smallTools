var championData = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:'',
    chioce:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var champion = wx.getStorageSync('championList')    
    championData = champion.data    
    this.setData({
      championData: championData
    })
    
  },
  shwoChamppionDetail(e){
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/championDetail/championDetail?id=' + id
    })
  },
  championSearchConfirm(e){
    console.log(e.detail.value)
    var searchValue = e.detail.value
    this.setData({
      searchValue: searchValue
    })
    this.filterChampion(this.data.chioce, searchValue)
  },
  championSearch(e){
    console.log(e)
  },
  championChange(e){
    console.log(e.detail.value)
    this.setData({
      chioce: e.detail.value
    })
    this.filterChampion(e.detail.value,this.data.searchValue)
  },
  filterChampion(chioce,value) {
    this.setData({
      scrollTop: 0
    })
    var chioce = chioce
    var obj = {}
    for (var key in championData) {

      var currentTags = championData[key].tags
      if (currentTags.length >= chioce.length) {
        var flag = true
        for (var i = 0; i < chioce.length; i++) {
          if (!currentTags.includes(chioce[i])) {
            flag = false
            break;
          }
        }
        if (flag) {
          var currentName = championData[key].name
          var currentTitle = championData[key].title
          if (currentName.includes(value) || currentTitle.includes(value)) {
            obj[key] = championData[key]
          }          
        }
      }
    }
    this.setData({
      championData: obj
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
