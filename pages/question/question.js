//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    radio: '1',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nextBtnText:"下一题",
    questionShowIndex:0,
    questionNum:3,
    questionShow: {
      "question": "1.入睡困难，睡不安稳或睡眠过多",
      "answers": [
        {
          "answer": "完全不会",
          "value": 0
        },
        {
          "answer": "好几天",
          "value": 1
        },
        {
          "answer": "一半以上的天数",
          "value": 2
        },
        {
          "answer": "几乎每天",
          "value": 3
        },
      ]
    },
    questions:[
      {
        "question":"1.入睡困难，睡不安稳或睡眠过多",
        "answers": [
          {
            "answer": "完全不会",
            "value": 0
          },
          {
            "answer": "好几天",
            "value": 1
          },
          {
            "answer": "一半以上的天数",
            "value": 2
          },
          {
            "answer": "几乎每天",
            "value": 3
          },
        ] 
      },
      {
        "question": "2.对事物专注有困难，例如阅读报纸或看电视时",
        "answers": [
          {
            "answer": "完全不会",
            "value": 0
          },
          {
            "answer": "好几天",
            "value": 1
          },
          {
            "answer": "一半以上的天数",
            "value": 2
          },
          {
            "answer": "几乎每天",
            "value":3
          },
        ] 
      },
      {
        "question": "3.动作或说话速度缓慢到别人已经察觉？或正好相反-烦躁或坐立不安、动来动去的情况更胜于平常",
        "answers": [
          {
            "answer": "完全不会",
            "value": 0
          },
          {
            "answer": "好几天",
            "value": 1
          },
          {
            "answer": "一半以上的天数",
            "value": 2
          },
          {
            "answer": "几乎每天",
            "value": 3
          },
        ] 
      }
    ]
  },

  onChange(event) {
    console.log(this.data.questions)
    if(this.data.questionShowIndex==this.data.questionNum){
      //回答完毕
      console.log("finish")
    }else{
      console.log(this.data.radio)
      this.setData({
        questionShow: this.data.questions[++this.data.questionShowIndex]
      });
    }
  },
  clickBtnLast(){
    if (this.data.questionShowIndex != 0) {
      this.setData({
        nextBtnText: "下一题",
        questionShow: this.data.questions[--this.data.questionShowIndex]
      });
    } else {
      console.log("first one")
    }
  },
  clickBtnNext(){
    if (this.data.questionShowIndex == this.data.questionNum) {
      //回答完毕
      console.log("last one")
    } else {
      if (this.data.questionShowIndex == this.data.questionNum-1) {
        this.setData({
          nextBtnText: "完成",
          questionShow: this.data.questions[++this.data.questionShowIndex]
        })
      }else{
        this.setData({
          questionShow: this.data.questions[++this.data.questionShowIndex]
        });
      }
      
      
    }
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
})
