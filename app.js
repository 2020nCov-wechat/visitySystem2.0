  //app.js
var headUrl = 'https://follwup.aiwac.net'
var headUrlV2 = 'http://cmas2020.cn:8013/'
var headUrlV21 = 'http://115.29.151.221:8013/'
var headUrlAiwac = 'http://www.aiwac.net:8013/'
var WXBizDataCrypt = require('utils/WXBizDataCrypt')
App({
  globalData: {
    appId: 'wxf308f14b24473080',
    userInfo: null,
    checkUserUrl: headUrl + '/wechat/login/',
    getUserInfo: headUrl + '/wechat/user/info/',
    insertUpdateInfoUrl: headUrl + '/wechat/user/infoinorup/',
    testResult: headUrl + '/ncov/getresults/',
    // sendResultUrl: headUrl + '/answer/submit/',
    // checkOrEndUrl: headUrl + '/answer/query/',
    // uploadPicVidUrl: headUrl + '/upload/',

    getScale: headUrl + '/ncov/getscale/',
    submitScale: headUrl + '/ncov/submitscale/',
    submitInfoUrl: headUrl + '/ncov/submitinfo/',
    submitRecentUrl: headUrl + '/ncov/submitrecent/',
    submitNeed: headUrl + '/ncov/submitneed/',
    sendUnionUrl: headUrl + '/wechat/user/unionid/',
    getVideoUrl: 'https://cmas.aiwac.net/animations/',

    userLoginUrl: headUrlV2 + 'followup2/stlogin',
    userRegistUrl: headUrlV2 + 'followup2/stRegist',
    userGetCodeUrl: headUrlV2 + 'followup2/getCode',
    userTestLoginStatusUrl: headUrlV2 + 'followup2/test',
    userForgetPassUrl: headUrlV2 +'followup2/resetPassword',
    compareFaceUrl: headUrlV2 + 'followup2/compareFace',

    getMotionTestResultUrl: headUrlV2 + 'followup2/wechat/chart',
    sendResultUrl: headUrlV2 + 'followup2/wechat/answer/submit',
    checkOrEndUrl: headUrlV2 + 'followup2/wechat/answer/query',
    uploadPicVidUrl: headUrlV2 + 'followup2/wechat/upload',
    stuSubmitScaleUrl: headUrlV2 +'followup2/wechat/submitscale',
    stuSendQueUrl: headUrlV2 + 'followup2/wechat/question',
    getFeiyanTestResultUrl: headUrlV2 + 'followup2/wechat/getresults',
    
    openid: '',
    session_key: '',
    sessionId:'',
    takePhotoTime: 5000,//拍照间隔
    takePhotoAuto: false,//拍照
    showPicUpload: false,//显示拍照上传成功
    videoNum: 24
  },
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
  //-----------------------------------------用户鉴权 start-----------------------------------------//
  //保存sessionid，不缓存在本地，小程序退出后数据会丢失
  saveSessionId:function(se){
    this.globalData.sessionId=se
  },
  //检查sessionid是否存在
  ifHaveSessionId:function(){
    if(this.globalData.sessionId==''){
      return false
    }else{
      return true
    }
  },
  //保存手机号和密码Md5格式在本地缓存，除非清除小程序缓存，否则会一直保存
  savePhoneAndPass:function(phone,password){
    wx.setStorage({
      key: 'phone',
      data: phone,
    })
    wx.setStorage({
      key: 'password',
      data: password,
    })
  },
  //获取包含手机号和密码的数据对象
  getPhoneAndPass:function(){
    try{
      return {
        phone: wx.getStorageSync('phone'),
        password: wx.getStorageSync('password')
      }
    }catch(e){
        console.log(e)
    }
  },
  //本地缓存有手机号和密码，则返回true，否则返回false
  ifHavePhonePass:function(){
    var userInfor =  this.getPhoneAndPass()
    if(userInfor.phone==null||userInfor.phone==''){
      return false;
    }else{
      return true;
    }
  },
  //-----------------------------------------用户鉴权 end-----------------------------------------//
  updateOpenid: function () {
    var that = this;
    wx.login({
      success: function (data) {
        console.log(data)
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
              // getApp().globalData.sessionId = res.data.
              that.sendUnionMsg()
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  saveUserInfo: function (userInfo) {
    getApp().globalData.userInfo = userInfo
  },
  sendUnionMsg: function () {
    wx.login({
      success: function (r) {
        var code = r.code;//登录凭证
        if (code) {
          wx.getUserInfo({
            success: res => {
              console.log("登录后获取数据")

              var newopenid = getApp().globalData.openid
              var newSession_key = getApp().globalData.session_key
              newSession_key = newSession_key.replace(/ +/g, '%2B')
              newopenid = newopenid.replace(/ +/g, '%2B')
              var exdata =  {
                openid: newopenid,
                session_key: newSession_key,
                encryptedData: res.encryptedData,
                iv: res.iv,
                code: code
              }
              console.log(exdata)
              wx.request({
                //获取openid接口
                url: getApp().globalData.sendUnionUrl,
                data: {
                  openid: newopenid,
                  session_key: newSession_key,
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                  code: code
                },
                method: 'POST',
                success: function (res) {
                  console.log(res.data)
                  if (res.data.errorCode == 200) {
                  }

                },
              })
            }
          })
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
      },
    })
  },
})