const utils = require('./utils.js')
var ctx =''
var wx
// 在 Worker 线程执行上下文会全局暴露一个 worker 对象，直接调用 worker.onMeesage/postMessage 即可
worker.onMessage(function (res) {
  console.log('这是worker内部线程打印的')
  console.log(res)
  // let sum = add(res.x, res.y);
  // worker.postMessage({
  //   sum: sum
  // })
  wx=res.wx
  ctx =  wx.createCameraContext()
  if(res.opt==1){
    startRecordV2()
  }
  if(res.opt==2){
    stopRecordV2()
  }
  
})
function add(x, y) {
  return x + y;
}
//==============================视频拍摄========================
//拍照
function takePhotoV2() {
  ctx.takePhoto({
    quality: 'high',
    success: (res) => {
      this.setData({
        picInVSrc: res.tempImagePath
      })
    }
  })
}
//开启视频录制
function startRecordV2() {
  console.log("开启录制")
  ctx.startRecord({
    success: (res) => {
      console.log('startRecord')
    }
  })
}
//停止录制视频，获得视频路径
function stopRecordV2() {
  console.log("停止录制")
  this.ctx.stopRecord({
    success: (res) => {
      this.setData({
        picInVSrc: res.tempThumbPath,//视频封面
        videoInVSrc: res.tempVideoPath
      })
      //uploadVideo(res.tempVideoPath)
    }
  })
}
//视频上传
function uploadVideo(videoPath) {
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
      fileName: videoPath,
      question: 2
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
}
  // //定时器摄像
  // setTimeVIdeo: function () {
  //   let that = this
  //   timeVideoStart = setInterval(function () {
  //     console.log('开始拍摄')
  //     //拍照
  //     that.startRecordV2()

  //   }, getApp().globalData.takePhotoTime) //循环间隔 单位ms
  // },
  //==============================视频拍摄========================
