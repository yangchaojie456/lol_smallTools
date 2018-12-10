var free = null
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
    setTimeout(()=>{
      this.setData({
        freeChampion:free.data
      }) 
    })
  },
  shwoChamppionDetail(e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/championDetail/championDetail?id=' + id
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


free = {
  "keys": {
    "12": "Alistar",
    "34": "Anivia",
    "222": "Jinx",
    "117": "Lulu",
    "99": "Lux",
    "57": "Maokai",
    "11": "MasterYi",
    "111": "Nautilus",
    "80": "Pantheon",
    "68": "Rumble",
    "35": "Shaco",
    "29": "Twitch",
    "77": "Udyr",
    "45": "Veigar"
  },
  "data": {
    "Alistar": {
      "id": "Alistar",
      "key": "12",
      "name": "牛头酋长",
      "title": "阿利斯塔",
      "tags": ["Tank", "Support"],
      "info": {
        "attack": 6,
        "defense": 9,
        "magic": 5,
        "difficulty": 7
      },
      "image": {
        "full": "Alistar.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "Anivia": {
      "id": "Anivia",
      "key": "34",
      "name": "冰晶凤凰",
      "title": "艾尼维亚",
      "tags": ["Mage", "Support"],
      "info": {
        "attack": 1,
        "defense": 4,
        "magic": 10,
        "difficulty": 10
      },
      "image": {
        "full": "Anivia.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "Jinx": {
      "id": "Jinx",
      "key": "222",
      "name": "暴走萝莉",
      "title": "金克丝",
      "tags": ["Marksman"],
      "info": {
        "attack": 9,
        "defense": 2,
        "magic": 4,
        "difficulty": 6
      },
      "image": {
        "full": "Jinx.png",
        "sprite": "champion1.png",
        "group": "champion",
        "x": 288,
        "y": 48,
        "w": 48,
        "h": 48
      }
    },
    "Lulu": {
      "id": "Lulu",
      "key": "117",
      "name": "仙灵女巫",
      "title": "璐璐",
      "tags": ["Support", "Mage"],
      "info": {
        "attack": 4,
        "defense": 5,
        "magic": 7,
        "difficulty": 5
      },
      "image": {
        "full": "Lulu.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 240,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "Lux": {
      "id": "Lux",
      "key": "99",
      "name": "光辉女郎",
      "title": "拉克丝",
      "tags": ["Mage", "Support"],
      "info": {
        "attack": 2,
        "defense": 4,
        "magic": 9,
        "difficulty": 5
      },
      "image": {
        "full": "Lux.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 288,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "Maokai": {
      "id": "Maokai",
      "key": "57",
      "name": "扭曲树精",
      "title": "茂凯",
      "tags": ["Tank", "Mage"],
      "info": {
        "attack": 3,
        "defense": 8,
        "magic": 6,
        "difficulty": 3
      },
      "image": {
        "full": "Maokai.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 432,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "MasterYi": {
      "id": "MasterYi",
      "key": "11",
      "name": "无极剑圣",
      "title": "易",
      "tags": ["Assassin", "Fighter"],
      "info": {
        "attack": 10,
        "defense": 4,
        "magic": 2,
        "difficulty": 4
      },
      "image": {
        "full": "MasterYi.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 0,
        "y": 48,
        "w": 48,
        "h": 48
      }
    },
    "Nautilus": {
      "id": "Nautilus",
      "key": "111",
      "name": "深海泰坦",
      "title": "诺提勒斯",
      "tags": ["Tank", "Fighter"],
      "info": {
        "attack": 4,
        "defense": 6,
        "magic": 6,
        "difficulty": 6
      },
      "image": {
        "full": "Nautilus.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 336,
        "y": 48,
        "w": 48,
        "h": 48
      }
    },
    "Pantheon": {
      "id": "Pantheon",
      "key": "80",
      "name": "战争之王",
      "title": "潘森",
      "tags": ["Fighter", "Assassin"],
      "info": {
        "attack": 9,
        "defense": 4,
        "magic": 3,
        "difficulty": 4
      },
      "image": {
        "full": "Pantheon.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 192,
        "y": 96,
        "w": 48,
        "h": 48
      }
    },
    "Rumble": {
      "id": "Rumble",
      "key": "68",
      "name": "机械公敌",
      "title": "兰博",
      "tags": ["Fighter", "Mage"],
      "info": {
        "attack": 3,
        "defense": 6,
        "magic": 8,
        "difficulty": 10
      },
      "image": {
        "full": "Rumble.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "Shaco": {
      "id": "Shaco",
      "key": "35",
      "name": "恶魔小丑",
      "title": "萨科",
      "tags": ["Assassin"],
      "info": {
        "attack": 8,
        "defense": 4,
        "magic": 6,
        "difficulty": 9
      },
      "image": {
        "full": "Shaco.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 336,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "Twitch": {
      "id": "Twitch",
      "key": "29",
      "name": "瘟疫之源",
      "title": "图奇",
      "tags": ["Marksman", "Assassin"],
      "info": {
        "attack": 9,
        "defense": 2,
        "magic": 3,
        "difficulty": 6
      },
      "image": {
        "full": "Twitch.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 384,
        "y": 96,
        "w": 48,
        "h": 48
      }
    },
    "Udyr": {
      "id": "Udyr",
      "key": "77",
      "name": "兽灵行者",
      "title": "乌迪尔",
      "tags": ["Fighter", "Tank"],
      "info": {
        "attack": 8,
        "defense": 7,
        "magic": 4,
        "difficulty": 7
      },
      "image": {
        "full": "Udyr.png",
        "sprite": "champion3.png",
        "group": "champion",
        "x": 432,
        "y": 96,
        "w": 48,
        "h": 48
      }
    },
    "Veigar": {
      "id": "Veigar",
      "key": "45",
      "name": "邪恶小法师",
      "title": "维迦",
      "tags": ["Mage"],
      "info": {
        "attack": 2,
        "defense": 2,
        "magic": 10,
        "difficulty": 7
      },
      "image": {
        "full": "Veigar.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 144,
        "y": 0,
        "w": 48,
        "h": 48
      }
    }
  },
  "date": ["2018-11-23", "2018-11-30"],
  "version": "8.23.1",
  "updated": "2018-11-27"
}; 