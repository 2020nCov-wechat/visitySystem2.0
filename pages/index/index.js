//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
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
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickBtn:function(){
    this.sendResult("是的，我很开心！",1)
  },
  //发送语音识别结果给后台
  sendResult: function (resultMsg, videoPage) {
    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')
    console.log(newopenid + ' ' + newSession_key)
    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.sendResultUrl,//gai url
      data: {
        openid: newopenid,
        session_key: newSession_key,
        question: videoPage,
        answer: resultMsg
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          //isFinished = true
        }
        // that.setData({
        //   currentDate: res.data.birthday,
        //   userDate: timeTwo.formatTimeTwo(parseInt(res.data.birthday), 'Y年M月D日'),
        //   sex: res.data.gender,
        //   tabs: res.data.tabs,
        // })
      }
    })
  },
})
