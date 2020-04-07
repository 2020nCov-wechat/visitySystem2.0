// pages/takephoto/takephoto.js

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageHost: app.globalData.imageHost,
    count: 0, // 设置 计数器 初始为0
    countTimer: null, // 设置 定时器 初始为null
    complete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkAuth()

  },
  onReady: function () {
    if (wx.createCameraContext()) {
      this.cameraContext = wx.createCameraContext('myCamera')
      //this.drawProgressbg();
      // this.drawCircle();
     // this.countInterval();//去掉注释则为加上蓝色进度条
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
    // this.bindChooiceProduct()
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    var that = this
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res.tempImagePath)
        that.setData({
          src: res.tempImagePath,
          camera: false
        })
        that.localhostimgesupdata(res.tempImagePath)
        wx.showToast({
          title: '拍照',
          icon: 'success',
          duration: 2000
        })
      }

    })
  },
  //图片上传
  localhostimgesupdata: function (imgPath) {
    console.log('图片上传')
    var sessionId = app.globalData.sessionId
    sessionId = sessionId.replace(/ +/g, '%2B')
    console.log(sessionId)
    wx.uploadFile({
      url: getApp().globalData.compareFaceUrl, //图片上传服务器真实的接口地址
      filePath: imgPath,
      name: 'file',
      header: {
        'Content-Type': 'multipart/form-data',
        'sessionId': sessionId,
      },
      formData: {
        method: 'GET',   //请求方式
      },
      success: function (res) {
        //var data = res.data
        var data = JSON.parse(res.data)
        console.log(res)
        if (res.statusCode == 200) {
          wx.showToast({
            title: '图片上传成功',
            icon: 'success',
            duration: 2000
          })
          if (data.errorMsg == '无人脸') {
            wx.showToast({
              title: '未检测到人脸',
              icon: 'none',
              duration: 2000
            })
          }
          else if (data.errorMsg == '对比成功') {
            wx.showToast({
              title: data.errorMsg,
              icon: 'none',
              duration: 2000
            })
            setTimeout(function () {
              wx.navigateTo({
                url: '../motiontest/motiontest',
              })
            }, 1000)
          }
          // else if (data.errorMsg == '不是同一个人'){
          //   setTimeout(function () {
          //     wx.navigateTo({
          //       url: '../que2/first/first',
          //     })
          //   }, 1000)
          // }
          else {
            wx.showToast({
              title: data.errorMsg,
              // title: '请重拍',
              icon: 'none',
              duration: 2000
            })
          }
        }
        else {
          console.log('上传失败')
        }
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  startdrawCanvas() {
    console.log('相机初始化成功')
  },

  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(5); // 设置圆环的宽度
    ctx.setStrokeStyle('#a9a9a9'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },
  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#2661DD");
    gradient.addColorStop("0.5", "#2661DD");
    gradient.addColorStop("1.0", "#2661DD");
    context.setLineWidth(5);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(110, 110, 100, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },
  countInterval: function () {
    // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
    this.countTimer = setInterval(() => {
      if (this.data.count <= 60) {
        /* 绘制彩色圆环进度条
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
        this.drawCircle(this.data.count / (60 / 2))
        this.data.count++;
      } else {
        this.setData({
          complete: true
        });
        clearInterval(this.countTimer);
      }
    }, 100)
  },
  complateDis() {
    this.takePhoto()
  },
  checkAuth: function () {
    var that = this
    wx.getSetting({
      success(res) {
        console.log(res)
        if (!res.authSetting['scope.camera']) {     //获取摄像头权限
          wx.authorize({
            scope: 'scope.camera',
            success() {
              console.log('授权成功')
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '请允许小艾使用摄像头，否则无法对您进行准确评测哦~~~同意后，请重启小程序生效',
                showCancel: false,
                success(res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                    wx.openSetting({      //这里的方法是调到一个添加权限的页面，可以自己尝试
                      success: (res) => {
                        if (!res.authSetting['scope.camera']) {
                          wx.authorize({
                            scope: 'scope.camera',
                            success() {
                              console.log('授权成功')
                              wx.navigateTo({
                                url: '',
                              })
                            }, fail() {
                              console.log('用户点击取消')
                            }
                          })
                        }
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
          })
        } else {
          wx.reLaunch({
            url: 'pages/motiontest/motiontest',
          })
        }
      },
      fail(res) {
      }
    })
  }
})