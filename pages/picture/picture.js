// pages/picture/picture.js
var app = getApp()
var utils = require("../../utils/util.js")
var time = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    wx.uploadFile({
      url: getApp().globalData.uploadPicVidUrl, //图片上传服务器真实的接口地址
      filePath: imgPath,
      name: 'fileName',
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '图片上传成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  stoptime: function() {
    console.log('定时停止')
    clearInterval(time)
  },
  takePhoto: function () {
    let that = this
    let ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res.tempImagePath)
        that.setData({
          src: res.tempImagePath
        })
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
})