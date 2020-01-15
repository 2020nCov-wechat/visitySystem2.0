// pages/auth/auth.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo && app.globalData.openid) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      if (this.data.canIUse) {
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
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clickBtn:function(){
    this.checkAuth()
  },
  checkAuth: function () {
    var that = this
    wx.getSetting({
      success(res) {
        console.log(res)
        var resultVoi = 0
        var resultCam = 0
        var resultInfo = 0
        if (!res.authSetting['scope.camera']){
          wx.authorize({
            scope: 'scope.record',
            success() {
              console.log('授权成功')
            },
            fail() {
              resultCam = 1
            }
          })
        }
        if (!res.authSetting['scope.record']){
          wx.authorize({
            scope: 'scope.camera',
            success() {
              console.log('授权成功')
            },
            fail() {
              resultVoi = 1
            }
          })
        }
        if (!res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
            },
            fail() {
              resultInfo = 1
            }
          })
        }
        if(!(resultCam==0 && resultVoi==0 && resultInfo==0)){
          wx.switchTab({
            url: "../../pages/my/my",
            success(res) {
              console.log(res)
            },
            fail(res) {
              console.log(res)
            }
          })
        }else{
          console.log('all true')
          wx.showModal({
            title: '提示',
            content: '请允许小艾获取您的头像、微信名，以及摄像头麦克风权限，才可以进入小程序哦~',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.openSetting({      //这里的方法是调到一个添加权限的页面，可以自己尝试
                  success: (res) => {
                    that.checkAuth()
                    // if (!res.authSetting['scope.camera']) {
                    //   wx.authorize({
                    //     scope: 'scope.camera',
                    //     success() {
                    //       console.log('授权成功')
                    //       wx.navigateTo({
                    //         url: '',
                    //       })
                    //     }, fail() {
                    //       console.log('用户点击取消')
                    //     }
                    //   })
                    // }
                  },
                  fail: function () {
                    console.log("授权设置摄像头失败");
                  }
                })

              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })

        }

        // if (!(res.authSetting['scope.camera'] && res.authSetting['scope.record'])){
        //   wx.authorize({
        //     scope: 'scope.record',
        //     success() {
        //       console.log('授权成功')
        //     },
        //     fail() {
        //       resultCam=1
        //     }
        //   })
        //   wx.authorize({
        //     scope: 'scope.camera',
        //     success() {
        //       console.log('授权成功')
        //     },
        //     fail() {
        //       resultVoi=1
        //     }
        //   })



        //   wx.showModal({
        //     title: '提示',
        //     content: '请允许小艾获取您的头像、微信名，以及摄像头麦克风权限，才可以进入小程序哦~',
        //     showCancel: false,
        //     success(res) {
        //       if (res.confirm) {
        //         console.log('用户点击确定')
        //         wx.openSetting({      //这里的方法是调到一个添加权限的页面，可以自己尝试
        //           success: (res) => {
        //             that.checkAuth()
        //             // if (!res.authSetting['scope.camera']) {
        //             //   wx.authorize({
        //             //     scope: 'scope.camera',
        //             //     success() {
        //             //       console.log('授权成功')
        //             //       wx.navigateTo({
        //             //         url: '',
        //             //       })
        //             //     }, fail() {
        //             //       console.log('用户点击取消')
        //             //     }
        //             //   })
        //             // }
        //           },
        //           fail: function () {
        //             console.log("授权设置摄像头失败");
        //           }
        //         })

        //       } else if (res.cancel) {
        //         console.log('用户点击取消')
        //       }
        //     }
        //   })
        // }else{
        //   wx.redirectTo({
        //     url: 'pages/my/my',
        //   })
        // }

        // if (!res.authSetting['scope.camera']) {     //获取摄像头权限
        //   wx.authorize({
        //     scope: 'scope.camera',
        //     success() {
        //       console.log('授权成功')
        //     },
        //     fail() {
        //       wx.showModal({
        //         title: '提示',
        //         content: '请允许小艾使用摄像头，否则无法对您进行准确评测哦~',
        //         showCancel: false,
        //         success(res) {
        //           if (res.confirm) {
        //             console.log('用户点击确定')
        //             wx.openSetting({      //这里的方法是调到一个添加权限的页面，可以自己尝试
        //               success: (res) => {
        //                 if (!res.authSetting['scope.camera']) {
        //                   wx.authorize({
        //                     scope: 'scope.camera',
        //                     success() {
        //                       console.log('授权成功')
        //                       wx.navigateTo({
        //                         url: '',
        //                       })
        //                     }, fail() {
        //                       console.log('用户点击取消')
        //                     }
        //                   })
        //                 }
        //               },
        //               fail: function () {
        //                 console.log("授权设置摄像头失败");
        //               }
        //             })

        //           } else if (res.cancel) {
        //             console.log('用户点击取消')
        //           }
        //         }
        //       })
        //     }
        //   })
        // } else if (!res.authSetting['scope.record']) {     //获取录音权限
        //   wx.authorize({
        //     scope: 'scope.record',
        //     success() {
        //       console.log('授权成功')
        //     },
        //     fail() {
        //       wx.showModal({
        //         title: '提示',
        //         content: '请允许小艾使用麦克风，否则无法对您进行准确评测哦~',
        //         showCancel: false,
        //         success(res) {
        //           if (res.confirm) {
        //             wx.openSetting({
        //               success: (res) => {
        //                 if (!res.authSetting['scope.record']) {
        //                   wx.authorize({
        //                     scope: 'scope.record',
        //                     success() {
        //                       console.log('授权成功')
        //                     }, fail() {
        //                       console.log('用户点击取消')
        //                     }
        //                   })
        //                 }
        //               },
        //               fail: function () {
        //                 console.log("授权设置录音失败");
        //               }
        //             })
        //           } else if (res.cancel) {
        //             console.log('用户点击取消')
        //           }
        //         }
        //       })
        //     }
        //   })
        // } else {
        //   wx.reLaunch({
        //     url: 'pages/motiontest/motiontest',
        //   })
        // }
      },
      fail(res) {
      }
    })
  }
})