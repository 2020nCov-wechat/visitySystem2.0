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
    stid:'',//学号
    showPassword: false,
    second: 0,
    array: ['华中科技大学', '武汉大学', '武汉理工大学','华中师范大学'],
    index: 0,
    inputFlag:true,
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
    phoneInput(e){
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
    stidInput(e) {
      this.setData({
        stid: e.detail.value
      })
    }, 
    display() {
      this.setData({
        showPassword:!this.data.showPassword
      })
    },

    schoolChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value,
        inputFlag:false
      })
    },
    getcode:function() {
      if (this.data.second > 0) {
        return;
      }
      if(this.data.phoneno.length!=11){
        wx.showToast({
          icon: 'none',
          title: '请输入正确的手机号'
        });
        return;
      }
      var that = this
      console.log(
        {
          tel: this.data.phoneno,
          type: 0
        }
      )
      wx.request({
        url: getApp().globalData.userGetCodeUrl, //仅为示例，并非真实接口地址。
        data: {
          tel: this.data.phoneno,
          type: 0,//0 ：注册 1：重置密码
        },
        method: 'POST',
        success: (res) => {
          console.log(res)
          if(res.statusCode==200){
            var data = res.data
            if(data.errorCode==200){
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
            }else{
              wx.showToast({
                title: data.errorMsg,
                icon: 'none'
              });
            }
          }else{
            wx.showToast({
              icon: 'none',
              title: '请检查网络'
            })
          }
 
        },
        fail:function(error){
          wx.showToast({
            title: '请检查网络',
          })
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
      if (this.data.stid.length == 0) {
        wx.showToast({
          icon: 'none',
          title: '请输入学号'
        });
        return;
      }
      if (this.data.inputFlag) {
        wx.showToast({
          icon: 'none',
          title: '请选择学校'
        });
        return;
      }
      var that = this
      var pages = getCurrentPages(); // 当前页面
      var beforePage = pages[pages.length - 2]; // 前一个页面
      wx.request({
        url: getApp().globalData.userRegistUrl,
        data: {
          tel: this.data.phoneno,
          code: this.data.code,
          stid:this.data.stid,
          department:this.data.array[this.data.index],
          password: this.data.password,
        },
        method: 'POST',
        success: (res) => {
          console.log(res)
          if (res.statusCode == 200) {
            //发送成功
            var data = res.data
            if (data.errorCode == 200) {
              //注册成功
              wx.showToast({
                title: data.errorMsg,
              });
              //保存sessionId
              getApp().saveSessionId(data.sessionId)
              //保存用户名和密码
              getApp().savePhoneAndPass(that.data.phoneno, utilMd5.hexMD5(that.data.password))
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
        },
        fail: function (error) {
          wx.showToast({
            title: '请检查网络',
          })
        }
      });
    }
  }
})