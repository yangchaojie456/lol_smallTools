import * as echarts from '../../ec-canvas/echarts';
var WxParse = require('../../wxParse/wxParse.js');
const app = getApp();
var http = require('../../server/http')
var api = require('../..//server/api')

var currentChampion = ''
var _attack = 0,
  _defense = 0,
  _difficulty = 0,
  _magic = 0;
var pifuImageHeight = 0;

function initChartRadar(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    // backgroundColor: "transparent",
    // color: ["red", "#FF9F7F"],

    tooltip: {
      // show:false
    },
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      center: ['50%', '65%'],
      // shape: 'circle',
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          color: 'white', //坐标上文字颜色
          opacity: 0.7
        }
      },
      splitLine: {
        lineStyle: {
          color: ['white'], // 分割线颜色
          opacity: 0.7
        }
      },
      splitArea: {
        areaStyle: {
          color: ['transparent'] // 分割线填充的颜色
        }
      },
      indicator: [{
          name: '物理',
          max: 10
        },
        {
          name: '魔法',
          max: 10
        },
        {
          name: '防御',
          max: 10
        }
      ]
    },
    series: [{
      label: {
        show: true,
        color: 'white'
      },
      itemStyle: {
        color: '#c9bb8f',
        // opacity:0.5
      },
      lineStyle: {
        color: '#c9bb8f',
        // opacity:0.5
      },
      areaStyle: {
        color: '#c9bb8f',
        opacity: 0.5
      },
      name: '圣枪游侠-卢锡安',
      type: 'radar',
      data: [{
        value: [_attack, _magic, _defense],
        name: '卢锡安'
      }]
    }]
  };

  chart.setOption(option);
  return chart;
}

function initChartBar(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {

    xAxis: {
      type: 'value',
      max: 10,
      nameGap: 5,
      splitNumber: 2,
      axisLine: {
        show: false,
        lineStyle: {
          color: 'transparent'
        }
      },
      axisTick: {
        lineStyle: {
          // color:'yellow'
        }
      },
      axisLabel: {
        color: '#ffffff',
        margin: 3
      },
      splitLine: {
        show: false,
        lineStyle: {
          // color:['blue']
        }
      }
    },
    yAxis: {
      nameGap: 15,
      data: ['难\n度'],
      type: 'category',
      axisLabel: {
        color: 'white',
        margin: 3
      }
    },
    series: [{
      center: ['50%', '10%'],
      data: [_difficulty],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0, [{
                offset: 0,
                color: '#3f3f39'
              },
              {
                offset: 1,
                color: '#c9bb8f'
              }
            ]
          )
        },
      },
      barWidth: '20rpx',
      type: 'bar'
    }]
  };


  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelValue: 1,
    levelValueIng: 1,
    itemIndex: 0,
    skillDes: '',
    skillName: ''
  },
  getChampionDetail(id) {
    return http({
      url: api.champion_detail+'/'+id
    })
  },
  setImageHeight(){
    pifuImageHeight = app.globalData.systemInfo.windowWidth * 700 / 1000
    this.setData({
      pifuImageHeight: pifuImageHeight
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    // 获取英雄详情
    this.getChampionDetail(options.id).then(res => {      
      currentChampion = res.data
      _attack = currentChampion.data.info.attack;
      _defense = currentChampion.data.info.defense;
      _difficulty = currentChampion.data.info.difficulty;
      _magic = currentChampion.data.info.magic;
      this.setData({
        version:currentChampion.version,
        currentChampion: currentChampion.data,
        tags: currentChampion.data.tags,
        stats: currentChampion.data.stats,
        lore: currentChampion.data.lore,
        spells: currentChampion.data.spells,
        passive: currentChampion.data.passive,
        skins: currentChampion.data.skins,
        ecRadar: {
          onInit: initChartRadar
        },
        ecBar: {
          onInit: initChartBar
        }
      })
    })
    // 皮肤scroll-view的高度
    this.setImageHeight()


  },
  bindChangeSpells(e) {
    console.log(e.currentTarget.dataset)
    // 选中当前的class
    this.setData({
      currentSkill: e.currentTarget.dataset.index
    })
    if (e.currentTarget.dataset.type == 'passive') {
      this.setData({
        skillDes: currentChampion.data.passive.description,
        skillName: currentChampion.data.passive.name,
        skillObj: {}
      })
      WxParse.wxParse('description', 'html', currentChampion.data.passive.description, this, 5);
    }
    if (e.currentTarget.dataset.type == 'spells') {
      currentChampion.data.spells.forEach(item => {
        if (item.id == e.currentTarget.dataset.index) {
          WxParse.wxParse('description', 'html', item.tooltip, this, 5);
          this.setData({
            skillDes: item.tooltip,
            skillName: item.name,
          })

          // 伤害和技能冷却格式化显示
          var skillObj = {}
          item.leveltip.label.forEach((ele, index) => {
            skillObj[ele.replace('</br>', '')] = item.leveltip.effect[index]
          })
          this.setData({
            skillObj: skillObj
          })
        }
      })

    }
  },
  sliderChange(e) {

    this.setData({
      levelValue: e.detail.value
    })
  },
  sliderChanging(e) {
    this.setData({
      levelValueIng: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  chooseItem(e) {
    console.log(e.target.dataset.index)
    this.setData({
      itemIndex: e.target.dataset.index
    })
  },
  // 显示图片
  showImage(e) {
    console.log(e)
    var imgUrl = e.currentTarget.dataset.imgurl
    wx.previewImage({
      current: imgUrl, // 当前显示图片的http链接
      urls: [imgUrl] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})

