//index.js
//获取应用实例
const app = getApp()
import Toast from '@vant/weapp/toast/toast';
var questionsOut = require('../../../config/queUser.js')
Page({
  
  data: {
    title: '真实感受',
    question: '请简单描述您对本次疫情的真实感受：',
    answer: ''
  },
  inputOthers:function(event){
    this.setData({
      answer:event.detail
    })
  },
  clickBtnNext:function(){
    console.log(this.data.answer)
    this.sendAnswer(this.data.answer)
  },
  //提交答案
  sendAnswer: function (advice) {
    var newSessionId = app.globalData.sessionId
    newSessionId = newSessionId.replace(/ +/g, '%2B')
    console.log({
      questionNaire: 1000,
      answers: [],
      text: advice
    })
    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.stuSubmitScaleUrl,
      header: {
        'sessionId': newSessionId,
      },
      data: {
        questionNaire: 1000,
        answers: [],
        text:advice
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          console.log("发送成功")

          Toast.success('成功提交');

          wx.switchTab({
            url: "../../my/my",
            success() {
              setTimeout(function () {
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) {
                  return;
                }
                page.updateChart(); // 执行前一个页面的updateChart方法
              }, 200)

            }
          });

        } else {
          //登录过期
          console.log("登录过期")
          //更新openid
          getApp().updateOpenid()
          that.sendAnswer(index)
        }

      },
    })

  },

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
              url: "/pages/quechoose/quechoose",
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

})