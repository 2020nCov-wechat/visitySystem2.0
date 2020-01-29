 //app.js
var headUrl = 'https://follwup.aiwac.net'
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    //worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径
  },
  globalData: {
    userInfo: null,
    checkUserUrl: headUrl + '/wechat/login/',
    getUserInfo: headUrl +'/wechat/user/info/',
    insertUpdateInfoUrl: headUrl + '/wechat/user/infoinorup/',
    testResult: headUrl + '/wechat/chart/',
    sendResultUrl: headUrl + '/answer/submit/',
    checkOrEndUrl: headUrl + '/answer/query/',
    uploadPicVidUrl: headUrl + '/upload/',
    getScale: headUrl +'/ncov/getscale/',
    submitScale: headUrl +'/ncov/submitscale/',
    openid: '',
    session_key: '' ,
    takePhotoTime:5000,//拍照间隔
    takePhotoAuto:false,//拍照
    showPicUpload: false,//显示拍照上传成功
    videoNum: 24
  },
  updateOpenid:function(){
    var that = this;
    wx.login({
      success: function (data) {
        console.log(data)
        //console.log(getApp().globalData.checkUserUrl)
        if (data.code) {
          wx.request({
            //获取openid接口
            url: getApp().globalData.checkUserUrl,
            data: {
              code: data.code
            },
            method: 'GET',
            success: function (res) {
              console.log(res.data)
              getApp().globalData.openid = res.data.openid; //获取到的openid 
              getApp().globalData.session_key = res.data.session_key; //获取到session_key 
              //console.log(getApp().globalData.openid + ' ' + getApp().globalData.session_key)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  //获取用户信息
  getUseInfoDetail: function () {

    wx.request({
      //获取openid接口
      url: getApp().globalData.getUserInfo,
      data: {
        openid: getApp().globalData.openid,
        session_key: getApp().globalData.session_key
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)

      }
    })
  },
})