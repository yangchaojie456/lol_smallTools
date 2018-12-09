module.exports = _http


function _http(options) {
  return new Promise((resolve, reject) => {    
    wx.request({
      url: options.url, //仅为示例，并非真实的接口地址
      data: options.data,
      header: options.header,
      success: res => {
        resolve(res)
      },
      fail: res => {
        reject(res)
      },
      complete: res => {
        reject(res)
      }
    })
  })

}
