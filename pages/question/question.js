//index.js
//获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';
var questionsOut = require('../../config/questions.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    radio: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    scaleTitle: '问卷调查',
    scaleBrief: '问卷调查',
    nextBtnText: "下一题",
    curScaleIndex: 3,//当前正在做的问卷序号
    questionHadAns: 0,
    questionShowIndex: 0,
    questionNum: 3,
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
    questions: questionsOut.doctorinfos,
    answers: []
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
    console.log(this.data.questionHadAns + '  ' + this.data.questionShowIndex + '     ' + (this.data.questionNum - 1))
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
        this.sendAnswer(this.data.curScaleIndex)
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
   // this.readQuestion()
   // 更新openid
    app.updateOpenid()
    Toast.loading({
      mask: true,
      message: '加载中...',
      duration: 2000
    });
    var that = this
    var time = setTimeout(function () {
      that.updateScale(that.data.curScaleIndex)
    }, 2000)
  },
  //更新Scale
  updateScale: function (index) {

    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')
    var file = index + '.csv'
    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.getScale,
      data: {
        openid: newopenid,
        session_key: newSession_key,
        fileName: file
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          var data = res.data
          var question = data.question
          var title = ''
          var brief = ''
          if (question != null) {
            title = question[0].title
            brief = question[0].brief
          }
          console.log(title + '  ' + brief)
          var ansNum = 0
          //取出key，获取回答数量
          if (question != null) {
            for (var key in question[0]) {
              if (that.isInteger(parseInt(key))) {
                if (parseInt(key) > ansNum) {
                  ansNum = parseInt(key)
                }
              }
            }
          }

          //设置问题
          var questions = []
          for (var que in question) {

            var qIns = question[que].qid + '.' + question[que].question

            var answers = []
            for (var i = 0; i <= ansNum; i++) {
              var answer = {
                "answer": question[que][i],
                "value": i
              }

              answers.push(answer)
            }

            var newQues = {
              "question": qIns,
              "answers": answers
            }
            questions.push(newQues)
          }


          that.setData({
            questionNum: data.questionNum,
            questions: questions,
            questionShow: questions[0],
            scaleTitle: title,
            scaleBrief: brief
          })

        } else {
          //登录过期
          if (res.data.errCode != 200) {
            console.log("获取问卷失败")
            //更新openid
            Toast.loading({
              mask: true,
              message: '加载中...',
              duration: 100
            });
            that.updateScale(index)
          }
        }

      },
    })

  },
  //提交答案
  sendAnswer: function (index) {
    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')

    var that = this
    console.log(that.data.answers)
    wx.request({
      //获取openid接口
      url: getApp().globalData.submitScale,
      data: {
        openid: newopenid,
        session_key: newSession_key,
        questionNaire: index,
        answers: that.data.answers
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          console.log("发送成功")
          console.log(that.data.answers)

          //Toast.success('成功提交');

          //获取得分与结果

          wx.navigateTo({
            url: '../que2/quefour/quefour'
          })

          //   wx.switchTab({
          //     url: "/pages/my/my",
          //     success() {
          //       var page = getCurrentPages().pop();
          //       if (page == undefined || page == null) return;
          //       //更新openid
          //       getApp().updateOpenid()
          //     }
          //   });
          // }, 1000)
          
        } else {
          //登录过期
          // if (res.data.errCode == 500) {
          //   console.log("登录过期")
          //   //更新openid
          //   getApp().updateOpenid()
          //   var time = setTimeout(function () {
          //     that.updateChart()
          //   }, 1000)
          // }
        }

      },
    })

  },
  //判断整数
  isInteger: function (obj) {
    return parseInt(obj, 10) === obj
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  readQuestion(){
    this.setData({
      questionShow:this.data.questions[0]
    })
  }
})