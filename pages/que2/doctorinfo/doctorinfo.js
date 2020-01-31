//index.js
//获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';
var questionsOut = require('../../../config/questions.js')
Page({
  data: {
    backClick: function () {
      var that = this;
      wx.showModal({
        title: '退出答题',
        content: '确认要退出答题吗？',
        success: function (res) {
          if (res.confirm) {
            console.log('点击确认回调');

            var time = setTimeout(function () {
              wx.switchTab({
                url: "/pages/que2/first/first",
                success() {
                  var page = getCurrentPages().pop();
                  if (page == undefined || page == null) return;

                }
              });
            }, 1000)

          } else {
            console.log('点击取消回调')
          }
        }
      })
    },
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    radio: '',
    sex:'',
    nation:'',
    age: '',
    married:'',
    education: '',
    workDept: '',
    job: '',
    dept: '',
    jobLevel: '',
    bottom: false,
    scaleTitle: '问卷调查',
    scaleBrief: '问卷调查',
    nextBtnText: "下一题",
    curScaleIndex: 3,//当前正在做的问卷序号
    questionHadAns: 0,
    questionShowIndex: 0,
    questionNum: questionsOut.doctorinfos.qNum,
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
    questions: questionsOut.doctorinfos.questions,
    answers: [],
    nationOption: ["汉族",
      "蒙古族",
      "藏族",
      "苗族",
      "壮族",
      "回族",
      "维吾尔族",
      "彝族",
      "布依族",
      "朝鲜族",
      "侗族",
      "白族",
      "哈尼族",
      "傣族",
      "傈僳族",
      "畲族",
      "拉祜族",
      "满族",
      "瑶族",
      "土家族",
      "哈萨克族",
      "黎族",
      "佤族",
      "高山族",
      "水族",
      "东乡族",
      "景颇族",
      "土族",
      "仫佬族",
      "布朗族",
      "毛南族",
      "锡伯族",
      "普米族",
      "纳西族",
      "柯尔克孜族",
      "达斡尔族",
      "羌族",
      "撒拉族",
      "仡佬族",
      "阿昌族",
      "塔吉克族",
      "怒族",
      "俄罗斯族",
      "德昂族",
      "裕固族",
      "塔塔尔族",
      "鄂伦春族",
      "门巴族",
      "基诺族",
      "乌孜别克族",
      "鄂温克族",
      "保安族",
      "京族",
      "独龙族",
      "赫哲族",
      "珞巴族"],



  },

  onChange(event) {
    console.log("onchange")
    console.log(event)
    console.log(this.data.questionHadAns + '  ' + this.data.questionShowIndex + '  ' + (this.data.questionNum - 1))
    if (this.data.questionHadAns > this.data.questionShowIndex) {
      console.log("回答过了")
      var ansNew = this.data.answers;
      ansNew[this.data.questionShowIndex] = event.detail
      this.setData({
        answers: ansNew
      })
      //--------
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
            radio: ra
          });
        }
      }, 500)

      //---------
    } else {
      console.log("还没回答过，第一次回答这道题目")
      this.data.answers.push(event.detail)

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

    }

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
        this.send(this.data.answers)
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
    message.push(this.data.sex)
    message.push(this.data.nation)
    message.push(this.data.age)
    message.push(this.data.married)
    message.push(this.data.education)
    message.push(this.data.workDept)
    message.push(this.data.job)
    message.push(this.data.dept)
    message.push(this.data.jobLevel)
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
      url: getApp().globalData.submitInfoUrl,
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
            url: '../doctornear/doctornear'
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


  
  //民族显示 
  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },
  showBottom:function() {
    this.toggle('bottom', true);
  },
  hideBottom:function() {
    this.toggle('bottom', false);
  },
  onCancelNation:function(){
    this.hideBottom()
  },
  onConfirmNation: function (value) {
    console.log(this.data.sex)
    console.log(this.data.nation)
    console.log(value.detail)
    this.setData({
      nation: value.detail.value
    })
    this.hideBottom()
    var event={
      "detail": value.detail.value
    }
    this.onChange(event)
  },
  readQuestion:function() {
    this.setData({
      questionShow: this.data.questions[0]
    })
  }
})
