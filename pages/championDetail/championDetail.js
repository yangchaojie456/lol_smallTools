import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

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
        value: [6, 4, 4],
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
      data: [4],
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
    levelValue:1,
    levelValueIng:1,
    itemIndex: 0,
    ecRadar: {
      onInit: initChartRadar
    },
    ecBar: {
      onInit: initChartBar
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 请求获取英雄接口
    var version = '8.23.1'
    // https://ddragon.leagueoflegends.com/cdn/8.23.1/data/en_US/champion/Lucian.json
    // http://lol.qq.com/biz/hero/Lucian.js
    setTimeout(() => {
      console.log(Lucian)
      console.log(Lucian.data.tags)
      
      console.log(Lucian.data.spells)
      this.setData({
        tags: Lucian.data.tags,
        stats: Lucian.data.stats,
        lore: Lucian.data.lore
      })
    })
  },
  bindChangeSpells(e){
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.type == 'passive'){

    }
    if (e.currentTarget.dataset.type == 'spells') {

    }
  },
  sliderChange(e){
    
    this.setData({
      levelValue:e.detail.value
    })
  },
  sliderChanging(e){
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


var Lucian = {
  "data": {
    "id": "Lucian",
    "key": "236",
    "name": "圣枪游侠",
    "title": "卢锡安",
    "tags": ["Marksman", "Fighter","Support"],
    "image": {
      "full": "Lucian.png",
      "sprite": "champion2.png",
      "group": "champion",
      "x": 192,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "skins": [{
      "id": "236000",
      "num": 0,
      "name": "default",
      "chromas": true
    }, {
      "id": "236001",
      "num": 1,
      "name": "职业杀手 卢锡安",
      "chromas": false
    }, {
      "id": "236002",
      "num": 2,
      "name": "夺命前锋 卢锡安",
      "chromas": false
    }, {
      "id": "236006",
      "num": 6,
      "name": "源计划：雷 卢锡安",
      "chromas": false
    }, {
      "id": "236007",
      "num": 7,
      "name": "觅心游侠 卢锡安",
      "chromas": false
    }, {
      "id": "236008",
      "num": 8,
      "name": "西部魔影 卢锡安",
      "chromas": false
    }],
    "info": {
      "attack": 8,
      "defense": 5,
      "magic": 3,
      "difficulty": 6
    },
    "stats": {
      "hp": 571,
      "hpperlevel": 86,
      "mp": 348.88,
      "mpperlevel": 38,
      "movespeed": 335,
      "armor": 28,
      "armorperlevel": 3,
      "spellblock": 30,
      "spellblockperlevel": 0.5,
      "attackrange": 500,
      "hpregen": 3.75,
      "hpregenperlevel": 0.65,
      "mpregen": 8.176,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 2.75,
      "attackspeedperlevel": 3.3,
      "attackspeed": 0.638
    },
    "spells": [{
      "id": "LucianQ",
      "name": "透体圣光",
      "description": "卢锡安射出一束穿透性的圣光穿过他的目标。",
      "image": {
        "full": "LucianQ.png",
        "sprite": "spell6.png",
        "group": "spell",
        "x": 336,
        "y": 144,
        "w": 48,
        "h": 48
      },
      "tooltip": "射出一束穿透性的圣光穿过一个目标单位，对一条线上的敌人造成85\/120\/155\/190\/225<span class=\"colorFF8C00\">(+0.6,0.75,0.9,1.05,1.2)<\/span>（额外攻击力的60\/75\/90\/105\/120%）物理伤害。<br \/><br \/><rules><span class=\"color8c8c8c\">此技能的施放时间会随着卢锡安的等级提升而略微降低。<\/span><\/rules>",
      "leveltip": {
        "label": ["伤害", "额外攻击力", "冷却时间", "法力消耗"],
        "effect": ["85\/120\/155\/190\/225", "60\/75\/90\/105\/120%", "9\/8\/7\/6\/5", "50\/60\/70\/80\/90"]
      },
      "resource": "50\/60\/70\/80\/90法力"
    }, {
      "id": "LucianW",
      "name": "热诚烈弹",
      "description": "卢锡安发射一个会呈星形爆炸的飞弹，并标记敌人。在卢锡安攻击被标记的敌人时，会获得移动速度加成。",
      "image": {
        "full": "LucianW.png",
        "sprite": "spell6.png",
        "group": "spell",
        "x": 384,
        "y": 144,
        "w": 48,
        "h": 48
      },
      "tooltip": "卢锡安发射一枚飞弹，飞弹会在命中敌人时或者到达终点时呈星形爆炸。爆炸会造成85\/125\/165\/205\/245<span class=\"color88FF88\">(+0.9)<\/span>魔法伤害，并将敌人标记6秒。<br \/><br \/>在卢锡安和他的友军对被标记的敌人造成伤害时，卢锡安会获得60\/65\/70\/75\/80移动速度加成，此加成持续2秒。",
      "leveltip": {
        "label": ["伤害", "移动速度", "冷却时间<\/br>"],
        "effect": ["85\/125\/165\/205\/245", "60\/65\/70\/75\/80", "14\/13\/12\/11\/10"]
      },
      "resource": "50法力"
    }, {
      "id": "LucianE",
      "name": "冷酷追击",
      "description": "卢锡安冲刺一小段距离。【圣光银弹】的攻击会减少【冷酷追击】的冷却时间。",
      "image": {
        "full": "LucianE.png",
        "sprite": "spell6.png",
        "group": "spell",
        "x": 432,
        "y": 144,
        "w": 48,
        "h": 48
      },
      "tooltip": "卢锡安冲刺一小段距离。<br \/><br \/>一旦【圣光银弹】命中了一名敌人，【E冷酷追击】的冷却时间就会减少1秒（在以敌方英雄为目标时，翻倍至2秒）。",
      "leveltip": {
        "label": ["冷却时间", "法力消耗"],
        "effect": ["22\/20\/18\/16\/14", "40\/30\/20\/10\/0"]
      },
      "resource": "40\/30\/20\/10\/0法力"
    }, {
      "id": "LucianR",
      "name": "圣枪洗礼",
      "description": "卢锡安的武器释放出大量的子弹。",
      "image": {
        "full": "LucianR.png",
        "sprite": "spell7.png",
        "group": "spell",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tooltip": "卢锡安在自由移动的同时，朝着一个方向猛射3秒。这些子弹会与命中的第一个敌方单位进行碰撞，每一发能造成20\/35\/50<span class=\"color88FF88\">(+0.1)<\/span><span class=\"colorFF8C00\">(+0.25)<\/span>物理伤害。圣枪洗礼对小兵造成200%伤害。<br \/><br \/>卢锡安可以在圣枪洗礼期间使用冷酷追击。<br \/><br \/>再次激活可以早点将圣枪洗礼取消掉。",
      "leveltip": {
        "label": ["伤害", "子弹数量", "冷却时间"],
        "effect": ["20\/35\/50", "20\/25\/30", "110\/100\/90"]
      },
      "resource": "100法力"
    }],
    "passive": {
      "name": "圣光银弹",
      "description": "在每次施放技能后的6秒内，卢锡安的下次普通攻击都会连射2次。",
      "image": {
        "full": "Lucian_Passive.png",
        "sprite": "passive2.png",
        "group": "passive",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "lore": "曾担光明哨兵的卢锡安是一位冷酷的死灵猎人。他用一对圣物手枪无情地追猎并灭绝不死亡灵。为亡妻复仇的意念吞噬了他，让他无止无休。除非消灭锤石，那个手握她灵魂的恶鬼。冷酷而且决绝的卢锡安不允许任何东西挡住自己的复仇之路。如果有什么人或者什么东西愚蠢到敢挑衅他的原则，就必将接受压倒性的神圣枪火狂轰滥炸。",
    "blurb": "曾担光明哨兵的卢锡安是一位冷酷的死灵猎人。他用一对圣物手枪无情地追猎并灭绝不死亡灵。为亡妻复仇的意念吞噬了他，让他无止无休。除非消灭锤石，那个手握她灵魂的恶鬼。冷酷而且决绝的卢锡安不允许任何东西挡住自己的复仇之路。如果有什么人或者什么东西愚蠢到敢挑衅他的原则，就必将接受压倒性的神圣枪火狂轰滥炸。",
    "allytips": ["- 最为理想的爆发连招是冷酷追击接透体圣光。", "- 热诚烈弹会呈星形爆炸。试着找一个前置目标，然后用爆炸后的流弹命中敌方英雄。", "- 一旦你为圣枪洗礼选择了一个角度，你就不能再改了。等时机成熟了再出手！", "- 由于被动技能“圣枪银弹”，卢锡安从攻击力中获得的收益要比从攻击速度中获得的收益还多得多。"],
    "enemytips": ["- 卢锡安的爆发伤害很高，但持续伤害比较低。", "- 卢锡安不能改变圣枪洗礼的瞄准方向。躲过子弹的角度就能获得优势。", "- 透体圣光不会给卢锡安额外的攻击距离。他仍然需要寻找一个目标来触发圣光。注意预判卢锡安将会选择的角度，就会比较容易躲掉透体圣光。"],
    "blocks": [{
      "map": "12",
      "mode": "ARAM",
      "recommended": [{
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "1038",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 2,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3087",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3006",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3031",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3508",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3094",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3036",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3078",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offmeta",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3285",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3089",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3100",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "2033",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": true
        }]
      }]
    }, {
      "map": "1",
      "mode": "CLASSIC",
      "recommended": [{
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "1055",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3340",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "early",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3144",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1043",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1001",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3153",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3006",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3094",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3508",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3031",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "situational",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "OdinTrinketRevive",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "3139",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3026",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3072",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "appendAfterSection": "",
        "visibleWithAllOf": [""],
        "hiddenWithAnyOf": [""],
        "items": [{
          "id": "2003",
          "count": 1,
          "hideCount": true
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": true
        }]
      }]
    }]
  },
  "version": "8.23.1",
  "updated": "2018-11-27"
}