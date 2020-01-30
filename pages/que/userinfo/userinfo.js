//index.js
//获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    radio: '',
    sex: '',
    nation: '',
    age: '',
    married: '',
    education: '',
    bottom: false,
    nextBtnText: "下一题",
    questionHadAns: 0,
    questionShowIndex: 0,
    questionNum: 5,
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
    questionShow: {
      "type": "1",
      "question": "2. 您的性别？",
      "answers": [{
        "answer": "男",
        "value": 0
      },
      {
        "answer": "女",
        "value": 1
      },
      ]
    },
    questions: [{
      "type": "1",
      "question": "2. 您的性别？",
      "answers": [{
        "answer": "男",
        "value": 0
      },
      {
        "answer": "女",
        "value": 1
      },
      ]
    },
    {
      "type": "5",
      "question": "3. 您的民族",
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
    {
      "type": "1",
      "question": "4. 您的年龄",
      "answers": [{
        "answer": "18~25",
        "value": 0
      },
      {
        "answer": "26~30",
        "value": 1
      },
      {
        "answer": "31~40",
        "value": 2
      },
      {
        "answer": "41~50",
        "value": 3
      },
      {
        "answer": "51~60",
        "value": 4
      },
      {
        "answer": "60以上",
        "value": 5
      },
    
      ]
    },
    {
        "type": "1",
        "question": "5. 婚姻状况",
        "answers": [{
          "answer": "未婚",
          "value": 0
        },
        {
          "answer": "已婚",
          "value": 1
        },
        {
          "answer": "丧偶",
          "value": 2
        },
        {
          "answer": "离异",
          "value": 3
        },
        ]
      },
      {
        "type": "1",
        "question": "6. 学历",
        "answers": [{
          "answer": "初中及以下",
          "value": 0
        },
        {
          "answer": "高中/中专",
          "value": 1
        },
        {
          "answer": "本科/大专",
          "value": 2
        },
        {
          "answer": "硕士",
          "value": 3
        },
        {
          "answer": "博士",
          "value": 4
        },
        ]
      }
    ],
    answers: []
    
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
    message.push(this.data.sex)
    message.push(this.data.nation)
    message.push(this.data.age)
    message.push(this.data.married)
    message.push(this.data.education)
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
            url: '../usernear/usernear'
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

  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },

  onChange(event) {

    console.log(this.data.questionHadAns + '  ' + this.data.questionShowIndex + '  ' + (this.data.questionNum - 1))
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
              nextBtnText: "完成"
            });
          }

        }
      }



    }
  },



  // //性别
  // onChangeSex: function (event) {
  //   this.setData({
  //     sex: event.detail
  //   })
  // },
  // //年龄
  // onChangeAge: function (event) {
  //   this.setData({
  //     age: event.detail
  //   })
  // },
  // //婚姻
  // onChangeMarried: function (event) {
  //   this.setData({
  //     married: event.detail
  //   })
  // },
  // //学历
  // onChangeEducation: function (event) {
  //   this.setData({
  //     education: event.detail
  //   })
  // },

  //民族显示
  showBottom: function () {
    this.toggle('bottom', true);
  },
  hideBottom: function () {
    this.toggle('bottom', false);
  },
  onCancelNation: function () {
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
  }
})
