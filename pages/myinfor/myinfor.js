// pages/myinfor/myinfor.js
const app = getApp()

Page({
  data: {
    sex:'男',
    showSex: false,
    sexOption: [
      { name: '男' },
      { name: '女' }
    ],
    tabs:'沉稳',
    showTabs: false,
    tabsOption: [
      { name: '沉稳' },
      { name: '太沉稳' },
      { name: '热情' },
      { name: '太热情' }
    ],
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    minDate: new Date(1980, 1, 1).getTime(),
    maxDate: new Date(2021, 1, 1).getTime(),
    currentDate: null,
    userDate:'1997年1月1日',
    bottom: false,
  
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },
  toggleActionSheet1() {
    this.toggle('showSex');
  },
  showBottom() {
    this.toggle('bottom', true);
  },
  hideBottom() {
    this.toggle('bottom', false);
  },

  toggleActionSheet2() {
    this.toggle('showTabs');
  },
  showTabs() {
    this.toggle('bottom', true);
  },
  hideTabs() {
    this.toggle('bottom', false);
  },
  backClick:function(){
    wx.navigateBack({
      delta:1
    })
  }
})
