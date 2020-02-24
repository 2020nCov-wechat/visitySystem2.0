import Toast from '@vant/weapp/toast/toast';
var utilMd5 = require('../../../utils/md5.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneno: getApp().getPhoneAndPass().phone,
    password: getApp().getPhoneAndPass().password,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.checkHavePhone()
  },
  checkHavePhone:function(){
    if (getApp().ifHavePhonePass()) {
      console.log("本地有手机号和密码，自动登录")
      var userLoginInfo = getApp().getPhoneAndPass()
      this.loginAuto(userLoginInfo.phone, userLoginInfo.password)
    } else {
      console.log("本地没有手机号和密码")
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  phonenoInput: function(e) {
    this.setData({
      phoneno: e.detail.value
    })
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  bindLogin() {
    // console.log("ph:"+this.data.phoneno+ "   pss:"+this.data.password )
    if (this.data.phoneno.length != 11) {
      wx.showToast({
        icon: 'none',
        title: '手机号不正确'
      });
      return;
    }
    if (this.data.password.length < 6) {
      wx.showToast({
        icon: 'none',
        title: '密码不正确'
      });
      return;
    }
    this.loginAuto(this.data.phoneno, utilMd5.hexMD5(this.data.password))
  },
  loginAuto:function(phone,password){
    Toast.loading({
      duration: 0,//展示时长(ms)，值为 0 时，toast 不会消失
      mask: true,
      message: '登录中...'
    });
    console.log({
      phone,
      password,
    })
    wx.request({
      url: getApp().globalData.userLoginUrl,
      data: {
        tel: phone,
        password: password,
      },
      method: 'POST',
      success: (res) => {
        console.log(res)
        Toast.clear()//清除toast
        if (res.statusCode == 200) {
          //发送成功
          var data = res.data
          if (data.errorCode == 200) {
            //登录成功
            wx.showToast({
              title: data.errorMsg,
            });
            //保存用户名和密码
            getApp().savePhoneAndPass(phone, password)
            //保存sessionId
            getApp().saveSessionId(data.sessionId)
            //跳转到之前的页面
            setTimeout(function () {
              wx.navigateBack({
                delta: 1,
              })
            }, 1000)

          }else{
            wx.showToast({
              icon: 'none',
              title: data.errorMsg
            });
          }
        } else {
          wx.showToast({
            icon: 'none',
            title: '请检查网络'
          })
        }
      },
      fail: function (error) {
        wx.showToast({
          title: '请检查网络',
        })
      }
    });
  }
})