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
    touchSick: '',
    haveSick: '',
    unconfirmSick: '',
    haveTrain: '',
    hadRep: '',
    canhelp: '',
    easySick: '',
    msgWay: '',
    appWork: '',
    hour: '',
    sensor: '',
    questions: [{
      "type": 6,
      "question": "11. 近一周居住城市",
      "answers": [{
        "answer": "请选择",
      }]
    },
    {
      "type": 1,
      "question": "12. 近一周主要居住地点",
      "answers": [{
        "answer": "城市",
      },
        {
          "answer": "农村",
        }]
    },
    {
      "type": 1,
      "question": "13. 近一周居住状态",
      "answers": [{
        "answer": "独居",
      },
      {
        "answer": "与家人居住",
      },
      {
        "answer": "与同事居住",
      },
      {
        "answer": "与朋友同事居住",
      },
      {
        "answer": "与其他人居住",
      }]
    },
    {
      "type": 1,
      "question": "14. 截至目前为止，您是否直接从事发热患者或确诊新冠肺炎患者的诊疗或护理工作？",
      "answers": [{
        "answer": "是",
      },
      {
        "answer": "否",
      }]
    },
    {
      "type": 3,
      "question": "15. 截止目前为止，是否有以下人员确诊为新冠肺炎？[多选]",
      "answers": [{
        "answer": "科室接诊的患者",
      },
      {
        "answer": "您本人",
      },
      {
        "answer": "家人",
      },
      {
        "answer": "同事",
      }, 
      {
        "answer": "朋友",
      },
      {
        "answer": "您居住的小区",
      },
      {
        "answer": "无",
      }]
    },
    {
      "type": 1,
      "question": "16. 近一周，您本人和与您共同居住的人（包括家人或合住的人）中，是否有人未确诊，但有发热、咳嗽等症状？",
      "answers": [{
        "answer": "是",
      },
      {
        "answer": "否",
      }]
    },
      {
        "type": 1,
        "question": "17. 您认为，您是否已经接受足够的新冠肺炎医院感染防护培训？",
        "answers": [{
          "answer": "是",
        },
        {
          "answer": "否",
        }]
      },
      {
        "type": 1,
        "question": "18. 工作中，您是否有条件按照最新的《新型冠状病毒医院感染预防与控制指南》或相关技术标准的要求，规范的做好个人防护？",
        "answers": [{
          "answer": "是",
        },
        {
          "answer": "否",
        }]
      },
      {
        "type": 1,
        "question": "19. 您认为当前的“新型冠状病毒医院感染防护标准”是否能保护您在工作中避免感染新型冠状病毒？",
        "answers": [{
          "answer": "是",
        },
        {
          "answer": "否",
        }]
      },
      {
        "type": 1,
        "question": "20. 您是否担心自己容易感染 ",
        "answers": [{
          "answer": "是",
        },
        {
          "answer": "否",
        }]
      },
      {
        "type": 4,
        "question": "21. 近一周您主要通过哪种方式获取新冠肺炎疫情信息？[多选]",
        "answers": [{
          "answer": "与他人聊天（包括面对面、电话、语音、视频、文字聊天等）",
        },
        {
          "answer": "社交媒体（包括朋友圈、公众号、微博、抖音等）",
          },
          {
            "answer": "电视",
          },
          {
            "answer": "其他",
          }]
      },
      {
        "type": 1,
        "question": "22. 您认为新闻或社交媒体（朋友圈、公众号、微博、抖音等）发布的心理调适资源或心理热线对您是否有帮助？",
        "answers": [{
          "answer": "有很大的帮助",
        },
        {
          "answer": "中等程度的帮助",
          },
          {
            "answer": "稍微有帮助",
          },
          {
            "answer": "无帮助",
          },
          {
            "answer": "没有关注，无法评价",
          }]
      },
      {
        "type": 1,
        "question": "23. 近一周，您平均每天通过各种方式接收疫情信息的时间大概为多少小时 ",
        "answers": [{
          "answer": "小于1小时",
        },
        {
          "answer": "1-2小时",
          },
          {
            "answer": "3-4小时",
          },
          {
            "answer": "5小时及以上",
          }]
      }, {
        "type": 1,
        "question": "24. 对于新冠肺炎被控制的进度，您的不确定感程度 ",
        "answers": [{
          "answer": "很强",
        },
        {
          "answer": "强",
          },
          {
            "answer": "一般",
          },
          {
            "answer": "无",
          }]
      },
    ],

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
    message.push(this.data.touchSick)
    message.push(this.arrayToString(this.data.haveSick))
    message.push(this.data.unconfirmSick)
    message.push(this.data.haveTrain)
    message.push(this.data.hadRep)
    message.push(this.data.canhelp)
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
      lifePlace : event.detail
    })
  },
  //近一周居住状态
  onChangeLifeStatus: function(event) {
    this.setData({
      lifeStatus: event.detail
    })
  },
  //截至目前为止，您是否直接从事发热患者或确诊新冠肺炎患者的诊疗或护理工作？
  onChangeTouchSick: function(event) {
    this.setData({
      touchSick: event.detail
    })
  },
  //截至目前为止，是否有以下人员确诊为新冠肺炎？
  onChangeHaveSick: function(event) {
    console.log(event.detail)
    this.setData({
      haveSick: event.detail
    })
  },
  //近一周，您本人和与您共同居住的人（包括家人或合住的人）中，是否有人未确诊，但有发热、咳嗽等症状？
  onChangeUnconfirmSick: function(event) {
    this.setData({
      unconfirmSick: event.detail
    })
  },
  //您认为，您是否已经接受足够的新冠肺炎医院感染防护培训？
  onChangeHaveTrain: function(event) {
    this.setData({
      haveTrain: event.detail
    })
  },
  //工作中，您是否有条件按照最新的《新型冠状病毒医院感染预防与控制指南》或相关技术标准的要求，规范的做好个人防护？
  onChangeHadRep: function(event) {
    this.setData({
      hadRep : event.detail
    })
  },
  //您认为当前的“新型冠状病毒医院感染防护标准”是否能保护您在工作中避免感染新型冠状病毒？
  onChangeCanhelp: function(event) {
    this.setData({
      canhelp: event.detail
    })
  },
  //您是否担心自己容易感染
  onChangeEasySick: function(event) {
    this.setData({
      easySick: event.detail
    })
  },
  //近一周您主要通过哪种方式获取新冠肺炎疫情信息？
  onChangeMsgWay: function(event) {
    this.setData({
      msgWay: event.detail
    })
  },
  //您认为新闻或社交媒体（朋友圈、公众号、微博、抖音等）发布的心理调适资源或心理热线对您是否有帮助？
  onChangeAppWork: function(event) {
    this.setData({
      appWork: event.detail
    })
  },
  //近一周，您平均每天通过各种方式接收疫情信息的时间大概为多少小时
  onChangeHour: function(event) {
    this.setData({
      hour: event.detail
    })
  },
  //对于新冠肺炎被控制的进度，您的不确定感程度
  onChangeSensor: function(event) {
    this.setData({
      sensor: event.detail
    })
  },

  //数组转字符串
  arrayToString:function(array){
    var returnResult=''
    for(var str in array){
      returnResult=returnResult+array[str]+', '
    }
    return returnResult
  }
})
