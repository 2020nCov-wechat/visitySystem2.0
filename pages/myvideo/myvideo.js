// pages/myvideo/myvideo.js
const app = getApp()
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoUrl:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var videoId=options.id;//视频id
    this.setData({
      // videoUrl: getApp().globalData.getVideoUrl +'v' + videoId+".mp4",
      videoUrl:"https://cmas.aiwac.net/animations/happy-1.mp4"
    })
    console.log("播放视频"+this.data.videoUrl)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('TestVideo')
  },
  //播放结束
  playEnd:function(){   
    wx.navigateBack({
      delta: 1
    })
  },
  //返回键
  backClick: function () {
    var that=this;
    Dialog.confirm({
      title: '退出提示',
      message: '您确定退出视频吗？'
    }).then(() => {
      // on confirm 确认退出
      console.log("confirm video exit")
      that.videoContext.stop();
      wx.navigateBack({
        delta: 1
      })
    }).catch(() => {
      // on cancel
      console.log("cancel exam exit")
      return
    });
    
  }
})