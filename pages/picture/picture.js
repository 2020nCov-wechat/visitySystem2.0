// pages/picture/picture.js
var app = getApp()
var utils = require("../../utils/util.js")
var time = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneno: getApp().getPhoneAndPass().phone,
    password: getApp().getPhoneAndPass().password,
    sessionId:getApp().globalData.sessionId,
    src:''
  },
  clickBtn:function(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: getApp().globalData.uploadPicVidUrl, //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            console.log(res)
            const data = res.data
            //do something
          }
        })
      }
    })
  },
  onLoad() {
    //更新openid
    getApp().updateOpenid()
  },
  //定时器拍照
  setTime: function () {
    let that = this
    let ctx = wx.createCameraContext()
    time = setInterval(function () {
        console.log('拍照')
        //拍照
        ctx.takePhoto({
          quality: 'high',
          success: (res) => {
            console.log(res.tempImagePath)
            that.setData({
              src: res.tempImagePath
            })
            that.localhostimgesupdata(res.tempImagePath)
          }
        })
    }, getApp().globalData.takePhotoTime) //循环间隔 单位ms
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
          if (data.errorMsg=='无人脸'){
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
          else{
            wx.showToast({
              title: data.errorMsg,
              // title: '请重拍',
              icon: 'none',
              duration: 2000
            })
          }
        }
        else{
          console.log('上传失败')
        }
      }
    })
  },
  stoptime: function() {
    console.log('定时停止')
    clearInterval(time)
  },
  camera: function () {
    let that = this
    let ctx = wx.createCameraContext()
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
  takeVideo:function(){
    utils.chooseVideo()
      .then(d => {
        console.log(d);
        let { tempFilePath, thumbTempFilePath, size } = d;
        this.setData({
          // tempThumbPath: thumbTempFilePath,
          tempVideoPath: tempFilePath,
        });
        //return wechat.uploadFile("https://xx.xxxxxx.cn/api/upload", tempFilePath, "tempVideoPath");
      })
      .then(d => {
        console.log(d);
      })
      .catch(e => {
        console.log(e);
      })
  },
  startime:function(){
    console.log('开启拍照')
    this.setTime();
  },
  bindstop: function() {
    console.log('非正常停止')
  },
  binderror: function() {
    console.log('用户拒绝授权')
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function() {
    console.log('显示')
    //定时器
    //this.setTime();
  },
  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function() {
    console.log('隐藏')
    clearInterval(time)
  },
  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function() {
    console.log('卸载')
    clearInterval(time)
  },
  open(e) {
    let { type } = e.target.dataset;
    console.log("开启相机准备", type == "takePhoto" ? "拍照" : "录视频");
    this.setData({
      camera: true,
      type
    })
  },
  // 关闭模拟的相机界面
  close() {
    console.log("关闭相机");
    this.setData({
      camera: false
    })
  },
  // 切换相机前后置摄像头
  devicePosition() {
    this.setData({
      device: !this.data.device,
    })
    console.log("当前相机摄像头为:", this.data.device ? "后置" : "前置");
  },
  
})