// pages/video/video.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad() {
    this.ctx = wx.createCameraContext()
    //更新openid
    getApp().updateOpenid()
  },

  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord() {
    console.log("开启录制")
    this.ctx.startRecord({
      quality: 'low',
      success: (res) => {
        console.log('startRecord')
      }
    })
  },

  stopRecord() {

    console.log("停止录制")
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
        var infff = wx.getFileInfo({
          filePath: res.tempVideoPath,
        })
        
        console.log(res)
        // wx.saveFile({
        //   tempFilePath: res.tempVideoPath,
        //   success(res) {
        //     const savedFilePath = res.savedFilePath
        //     console.log(res)
        //     console.log(savedFilePath)
        //   }
        // })
        this.uploadVideo(res.tempVideoPath)
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  //视频上传
  uploadVideo: function (videoPath) {
    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')
    console.log('上传')
    wx.uploadFile({
      url: getApp().globalData.uploadPicVidUrl, //图片上传服务器真实的接口地址
      filePath: videoPath,
      name: 'file',
      formData: {
        openid: newopenid,
        session_key: newSession_key,
        picOrVid: 2,
        fileName:videoPath
      },
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '视频上传成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
})