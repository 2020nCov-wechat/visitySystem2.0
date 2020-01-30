//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    radio: '',
    lifePlace: '',
    lifeStatus: '',
    haveSick: '',
    unconfirmSick: '',
    easySick: '',
    msgWay: '',
    appWork: '',
    hour: '',
    sensor: '',


  },
  onChange: function (event) {
    this.setData({
      radio: event.detail
    })
  },


  onLoad: function () {

    //更新openid
    app.updateOpenid()
    // Toast.loading({
    //   mask: true,
    //   message: '加载中...',
    //   duration: 2000
    // });

  },
  nextPage: function () {
    var message = []
    message.push(this.data.lifePlace)
    message.push(this.data.lifeStatus)
    message.push(this.arrayToString(this.data.haveSick))
    message.push(this.data.unconfirmSick)
    message.push(this.data.easySick)
    message.push(this.arrayToString(this.data.msgWay))
    message.push(this.data.appWork)
    message.push(this.data.hour)
    message.push(this.data.sensor)
    console.log(message)

    this.send(message)
  },
  //发送信息
  send: function (message) {

    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')
    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.submitRecentUrl,
      data: {
        openid: newopenid,
        session_key: newSession_key,
        message: message
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {

          wx.navigateTo({
            url: '../../question/question'
          })

        } else {
          //登录过期
          if (res.data.errCode != 200) {
            console.log("提交失败")
            //更新openid
            Toast.loading({
              mask: true,
              message: '加载中...',
              duration: 100
            });
            that.send(message)
          }
        }

      },
    })

  },



  //近一周主要居住地点
  onChangeLifePlace: function (event) {
    this.setData({
      lifePlace: event.detail
    })
  },
  //近一周居住状态
  onChangeLifeStatus: function (event) {
    this.setData({
      lifeStatus: event.detail
    })
  },

  //截至目前为止，是否有以下人员确诊为新冠肺炎？
  onChangeHaveSick: function (event) {
    console.log(event.detail)
    this.setData({
      haveSick: event.detail
    })
  },
  //近一周，您本人和与您共同居住的人（包括家人或合住的人）中，是否有人未确诊，但有发热、咳嗽等症状？
  onChangeUnconfirmSick: function (event) {
    this.setData({
      unconfirmSick: event.detail
    })
  },
  //您是否担心自己容易感染
  onChangeEasySick: function (event) {
    this.setData({
      easySick: event.detail
    })
  },
  //近一周您主要通过哪种方式获取新冠肺炎疫情信息？
  onChangeMsgWay: function (event) {
    this.setData({
      msgWay: event.detail
    })
  },
  //您认为新闻或社交媒体（朋友圈、公众号、微博、抖音等）发布的心理调适资源或心理热线对您是否有帮助？
  onChangeAppWork: function (event) {
    this.setData({
      appWork: event.detail
    })
  },
  //近一周，您平均每天通过各种方式接收疫情信息的时间大概为多少小时
  onChangeHour: function (event) {
    this.setData({
      hour: event.detail
    })
  },
  //对于新冠肺炎被控制的进度，您的不确定感程度
  onChangeSensor: function (event) {
    this.setData({
      sensor: event.detail
    })
  },

  //数组转字符串
  arrayToString: function (array) {
    var returnResult = ''
    for (var str in array) {
      returnResult = returnResult + array[str] + ', '
    }
    return returnResult
  }
})
