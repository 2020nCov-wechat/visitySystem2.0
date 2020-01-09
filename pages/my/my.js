//my.js 仿照 index.js
//获取应用实例
var WXBizDataCrypt = require('../../utils/WXBizDataCrypt.js')
const app = getApp()

var wxCharts = require('../../utils/wxcharts.js');

var ringChart = null;
var columnChart = null;

const appSecert = '0d6c9a7583082f0f83a817a16a8555c9'
const appID = 'wx4967a2d91998acc2'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    chartTitle: '综合得分',
    percent: 30,//进度条
    isMainChartDisplay: true,
    level:'无抑郁',
    score:'11',
    suggestion:'早睡早起',
    chartData : {
      main: {
        title: '综合得分',
        data: [15, 20, 9, 2, 0, 11, 12],
        categories: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      sub: [{
        title: '周一记录',
        data: [70, 40, 65, 100, 34, 18],
        categories: ['1', '2', '3', '4', '5', '6']
      }, {
        title: '周二记录',
        data: [55, 30, 45, 36, 56, 13],
        categories: ['1', '2', '3', '4', '5', '6']
      }, {
        title: '周三记录',
        data: [76, 45, 32, 74, 54, 35],
        categories: ['1', '2', '3', '4', '5', '6']
      }, {
        title: '周四记录',
        data: [76, 54, 23, 12, 45, 65],
        categories: ['1', '2', '3', '4', '5', '6']
      }]
    }


  },
 
  //事件处理函数
  bindViewTap: function () {
    
    wx.navigateTo({
      // url: '../logs/logs'
      url: '../myinfor/myinfor'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo && app.globalData.openid) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else{
      if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
      app.updateOpenid()
      this.updateChart()
    } 
  },
  //更新chart
  updateChart:function(){
    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')
    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.testResult,
      data: {
        openid: newopenid,
        session_key: newSession_key
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          that.setData({
            chartData: res.data.charData,
            level: res.data.level,
            score: res.data.score,
            suggestion: res.data.suggestion
          })
        }else{
          
        }
      },
    })

  },
  //没用了
  getOpenIdTabFromAPP:function(){
    app.updateOpenid()
  },
  //没用了
  getOpenIdTap: function () {
    var that = this;
    wx.login({
      success: function (data) {
        //console.log(data)
        //console.log(getApp().globalData.checkUserUrl)
        if(data.code){
          wx.request({
            //获取openid接口
            url: getApp().globalData.checkUserUrl,
            data: {
              code: data.code
            },
            method: 'GET',
            success: function (res) {
              console.log(res.data)
              app.globalData.openid =  res.data.openid; //获取到的openid 
              app.globalData.session_key = res.data.session_key; //获取到session_key 
            }
          })
        }else{
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  //没用了
  testInfo:function(){
    console.log("in test")
    this.getOpenIdTap()
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(res.userInfo)
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goMyInfo: function () {
    wx.navigateTo({
     url: "../myinfor/myinfor",
    })
  },

//环形图
  touchHandler: function (e) {
    console.log(ringChart.getCurrentDataIndex(e));
  },
  updateData: function () {
    ringChart.updateData({
      title: {
        name: this.data.score
      },
      subtitle: {
        color: '#ff0000'
      }
    });
  },
//柱状图
  backToMainChart: function () {
    this.setData({
      chartTitle: this.data.chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData({
      categories: this.data.chartData.main.categories,
      series: [{
        name: '得分',
        data: this.data.chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '分';
        }
      }]
    });
  },
  touchHandler: function (e) {
    var index = columnChart.getCurrentDataIndex(e);
    if (index > -1 && index < this.data.chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
        chartTitle: this.data.chartData.sub[index].title,
        isMainChartDisplay: false
      });
      columnChart.updateData({
        categories: this.data.chartData.sub[index].categories,
        series: [{
          name: '得分',
          data: this.data.chartData.sub[index].data,
          format: function (val, name) {
            return val.toFixed(2) + '分';
          }
        }]
      });

    }
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: this.data.score,
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: this.data.level,
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '成交量1',
        data: 11,
        stroke: false
      }, {
        name: '成交量2',
        data: 89,
        stroke: false,
          color:'#EAEAEA'
      }],
      disablePieStroke: true,
      width: windowWidth,
      height: 200,
      dataLabel: false,
      legend: false,
      background: '#f5f5f5',
      padding: 0
    });
    ringChart.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    setTimeout(() => {
      ringChart.stopAnimation();
    }, 500);

    console.log(this.data.chartData.main.categories)
    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: this.data.chartData.main.categories,
      series: [{
        name: '得分',
        data: this.data.chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '分';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '分';
        },
        // title: 'hello',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width:wx.getSystemInfoSync().windowWidth * 0.9,
      height: 200,
    });
  },
  progress: function () {
    var that = this;
    var percent = xxx; //获取percent
    that.setData({
      percent: percent
    })
  }
})
