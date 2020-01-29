//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    radio: ''
  },
  onChange: function (event) {
    this.setData({
      radio: event.detail
    })
  },


  onLoad: function () {

  },

  nextPage: function () {
    wx.navigateTo({
      url: '../../usernear/usernear'
    })
  },
})
