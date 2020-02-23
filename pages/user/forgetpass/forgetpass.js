// pages/user/regist/regist.js
const computedBehavior = require('miniprogram-computed')
var utilMd5 = require('../../../utils/md5.js');

Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    phoneno: '',//学号
    password: '',//密码
    code: '',//验证码
    stid: '',//学号
    showPassword: false,
    second: 0,
  },
  computed: {
    yanzhengma(data) {
      if (data.second == 0) {
        return '获取验证码';
      } else {
        if (data.second < 10) {
          return '重新获取0' + data.second;
        } else {
          return '重新获取' + data.second;
        }
      }
    }
  },
  methods: {
    back() {
      wx.navigateBack({
        delta: 1,
      })
    },
    phoneInput(e) {
      this.setData({
        phoneno: e.detail.value
      })
    },
    codeInput(e) {
      this.setData({
        code: e.detail.value
      })
    },
    passwordInput(e) {
      this.setData({
        password: e.detail.value
      })
    },
    display() {
      this.setData({
        showPassword: !this.data.showPassword
      })
    },

    getcode() {
      if (this.data.second > 0) {
        return;
      }
      var that = this
      console.log(
        {
          tel: this.data.phoneno,
          type: 1
        }
      )
      wx.request({
        url: getApp().globalData.userGetCodeUrl, //仅为示例，并非真实接口地址。
        data: {
          tel: this.data.phoneno,
          type: 1,//0 ：注册 1：重置密码
        },
        method: 'POST',
        success: (res) => {
          console.log(res)
          if (res.statusCode == 200) {
            var data = res.data
            if (data.errorCode == 200) {
              wx.showToast({
                title: data.errorMsg,
              });

              that.setData({
                second: 60
              })
              var js = setInterval(function () {
                that.setData({
                  second: that.data.second - 1
                })
                if (that.data.second == 0) {
                  clearInterval(js)
                }
              }, 1000)
            } else {
              wx.showToast({
                title: data.errorMsg,
                icon: 'none'
              });
            }
          } else {

          }

        }
      });
    },
    bindLogin() {
      console.log(this.data)
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
      if (this.data.code.length != 6) {
        wx.showToast({
          icon: 'none',
          title: '验证码不正确'
        });
        return;
      }
      var that = this
      var passwordMd5 = utilMd5.hexMD5(this.data.password)
      var pages = getCurrentPages(); // 当前页面
      var beforePage = pages[pages.length - 2]; // 前一个页面

      wx.request({
        url: getApp().globalData.userForgetPassUrl,
        data: {
          tel: this.data.phoneno,
          code: this.data.code, 
          password: passwordMd5,
        },
        method: 'POST',
        success: (res) => {
          console.log(res)
          if (res.statusCode == 200) {
            //发送成功
            var data = res.data
            if (data.errorCode == 200) {
              //修改密码成功
              wx.showToast({
                title: data.errorMsg,
              });
              //保存用户名和密码
              getApp().savePhoneAndPass(that.data.phoneno, passwordMd5)
              //返回登录界面，因为注册只有从登录界面过来，所以返回上一层
              //此时要调用上一个登录页面的检查本地缓存函数，以便自动登录
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1,
                  success: function () {
                    beforePage.checkHavePhone(); // 执行前一个页面的checkHavePhone方法
                  }
                })
              }, 1000)
            } else {
              wx.showToast({
                title: data.errorMsg,
                icon: 'none'
              });
            }
          } else {
            wx.showToast({
              icon: 'none',
              title: '请检查网络'
            })
          }
        }
      });
    }
  }
})