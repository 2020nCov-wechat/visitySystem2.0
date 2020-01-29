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
    health: '',
    change: '',
    help:'',
    person:'',
    type:'',
    method:'',
    activities:''
  },

  onChange: function (event) {
    console.log("onChange:"+event.target.id + "-> " + event.detail);
    if (event.target.id=='health'){
      this.setData({
        health: event.detail
      })
    } else if (event.target.id == 'change'){
      this.setData({
        change: event.detail
      })
    } else if (event.target.id == 'help'){
      this.setData({
        help: event.detail
      })
    } else if (event.target.id == 'person') {
      this.setData({
        person: event.detail
      })
    } else if (event.target.id == 'type') {
      this.setData({
        type: event.detail
      })
    } else if (event.target.id == 'method') {
      this.setData({
        method: event.detail
      })
    } else if (event.target.id == 'activities') {
      this.setData({
        activities: event.detail
      })
    }
  },
  
  onLoad: function () {
    //更新openid
    app.updateOpenid()
  },
 
  //提交健康需求
  submitNeed:function(){
    var message = []
    message.push(this.data.health)
    message.push(this.data.change)
    message.push(this.arrayToString(this.data.help))
    message.push(this.data.person)
    message.push(this.arrayToString(this.data.type))
    message.push(this.data.method)
    message.push(this.data.activities)
    console.log(message)

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
        message:message
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

  arrayToString:function(array){
    var returnResult=''
    for(var str in array){
      returnResult=returnResult+array[str]+','
    }
    return returnResult
  }
})
