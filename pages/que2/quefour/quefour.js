//index.js
//获取应用实例
const app = getApp()

import Toast from '@vant/weapp/toast/toast';
var questionsOut = require('../../../config/questions.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    radio: '',

    bottom: false,
    scaleTitle: '问卷调查',
    scaleBrief: '问卷调查',
    nextBtnText: "下一题",
    curScaleIndex: 3,//当前正在做的问卷序号
    questionHadAns: 0,
    questionShowIndex: 0,
    questionNum: questionsOut.quefour.qNum,
    questionShow: {
      "question": "1.入睡困难，睡不安稳或睡眠过多",
      "answers": [{
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
    questions: questionsOut.quefour.questions,
    answers: [],

  },
  onChange: function (event) {
    this.setData({
      radio: event.detail
    })
  },

  readQuestion: function () {
    this.setData({
      questionShow: this.data.questions[0]
    })
  },
  onChange(event) {
    console.log("onchange")
    console.log(event)
    // console.log(this.data.questionHadAns + '  ' + this.data.questionShowIndex + '  ' + (this.data.questionNum - 1))
    if (this.data.questionHadAns >= this.data.questionNum) {
      console.log("回答完了")
      var ansNew = this.data.answers;
      ansNew[this.data.questionShowIndex] = event.detail
      this.setData({
        answers: ansNew
      })
    } else {
      console.log("还没回答完")
      this.data.answers.push(event.detail)
    }
    this.setData({
      radio: event.detail
    })
    console.log(this.data.answers)
    var that = this
    var time = setTimeout(function () {
      if (that.data.questionShowIndex == that.data.questionNum - 2) {
        that.setData({
          nextBtnText: "完成"
        })
      }
      if (that.data.questionShowIndex == that.data.questionNum - 1) {
        //回答完毕
        console.log("finish")
        that.setData({
          questionHadAns: that.data.questionHadAns + 1,
          nextBtnText: "完成"
        })
      } else {
        console.log(that.data.radio)
        //如果后面的回答过了，就显示后面的题目
        var ra = ''
        if (that.data.questionHadAns > that.data.questionShowIndex) {
          ra = that.data.answers[that.data.questionShowIndex + 1]
          console.log("ra::" + ra)
        }
        that.setData({
          questionShow: that.data.questions[that.data.questionShowIndex + 1],
          questionShowIndex: that.data.questionShowIndex + 1,
          questionHadAns: that.data.questionHadAns + 1,
          radio: ra
        });
      }
    }, 500)
    // if (this.data.questionShowIndex == this.data.questionNum - 1) {
    //   //回答完毕
    //   console.log("finish")
    // } else {
    //   console.log(this.data.radio)
    //   this.setData({
    //     questionShow: this.data.questions[this.data.questionShowIndex + 1],
    //     questionShowIndex: this.data.questionShowIndex + 1,
    //     radio: ''
    //   });
    // }
  },
  clickBtnLast() {
    if (this.data.questionShowIndex != 0) {
      console.log(this.data.questions[this.data.questionShowIndex])
      this.setData({
        nextBtnText: "下一题",
        questionShow: this.data.questions[this.data.questionShowIndex - 1],
        questionShowIndex: this.data.questionShowIndex - 1,
        radio: this.data.answers[this.data.questionShowIndex - 1]
      });
    } else {
      console.log("first one")
    }
  },
  clickBtnNext() {

    if (this.data.questionHadAns <= this.data.questionShowIndex) {
      console.log("还没答完当前题目")
      Toast.fail('请先回答当前问题');
    } else {
      if (this.data.questionShowIndex == this.data.questionNum - 1) {
        //回答完毕
        console.log("last one")
        this.setData({
          nextBtnText: "完成"
        })
        this.submitNeed()
      } else {
        console.log(this.data.questionShowIndex)
        if (this.data.questionShowIndex == this.data.questionNum - 2) {
          //是最后一道题
          if (this.data.questionHadAns <= this.data.questionShowIndex + 1) {
            //下一题还没回答
            this.setData({
              nextBtnText: "完成",
              questionShow: this.data.questions[this.data.questionShowIndex + 1],
              radio: '',
              questionShowIndex: this.data.questionShowIndex + 1,
            })
          } else {
            this.setData({
              nextBtnText: "完成",
              questionShow: this.data.questions[this.data.questionShowIndex + 1],
              radio: this.data.answers[this.data.questionShowIndex + 1],
              questionShowIndex: this.data.questionShowIndex + 1,
            })
          }

        } else {
          //不是最后一道题
          if (this.data.questionHadAns <= this.data.questionShowIndex + 1) {
            //下一题还没回答
            this.setData({

              questionShow: this.data.questions[this.data.questionShowIndex + 1],
              radio: '',
              questionShowIndex: this.data.questionShowIndex + 1,
            })
          } else {
            this.setData({
              questionShow: this.data.questions[this.data.questionShowIndex + 1],
              radio: this.data.answers[this.data.questionShowIndex + 1],
              questionShowIndex: this.data.questionShowIndex + 1,
            });
          }

        }
      }
    }
  },
  onLoad: function () {
    //更新openid
    app.updateOpenid()
    // Toast.loading({
    //   mask: true,
    //   message: '加载中...',
    //   duration: 2000
    // });
    this.readQuestion()
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
  //提交健康需求
  submitNeed: function () {

    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')

    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.submitNeed,
      data: {
        openid: newopenid,
        session_key: newSession_key,
        message: that.data.answers
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          console.log("发送成功")
          Toast.success('成功提交');

          var time = setTimeout(function () {
            wx.switchTab({
              url: "/pages/my/my",
              success() {
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) return;

              }
            });
          }, 1000)

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


  //数组转字符串
  arrayToString: function (array) {
    var returnResult = ''
    for (var str in array) {
      returnResult = returnResult + array[str] + ', '
    }
    return returnResult
  }
})
