//motiontest.js
const util = require('../../utils/util.js')

var video_urls = {};  //视频url
var videoPage;  //当前播放视频
var pageArr = new Array()  //存储视频队列长度
var isFinished; // 说话是否结束,需要算法监测
var isDefault; // 当前是否默认视频
var btn_type; // 按钮类型，1-开始按钮，2-停止按钮
var videoNum = 12;//测评视频数量
var videoCommonUrl ="http://followup.aiwac.net/animations/";
Page({

  onLoad: function () {

    video_urls = {};  //视频url
    videoPage = 0;  //当前播放视频
    pageArr = new Array()  //存储视频队列长度
    isFinished = true; // 说话是否结束
    isDefault = true; // 当前是否默认视频
    btn_type = 1;//开始按钮
    if (btn_type == 1) { this.setData({ btn_txt: "开始测评", })}


    //测评视频集合,v00为眨眼默认视频
    for (var i = 0; i < videoNum; i++) {
      var indexStr = 'index' + (i)
      if(i<10){
        video_urls[indexStr] = videoCommonUrl + 'v0'+(i)+'.mp4';
      }else if(i<100){
        video_urls[indexStr] = videoCommonUrl + 'v' + (i) + '.mp4';
      }
    }
    this.setData({
      videUrl: video_urls['index0'],//默认播放视频
    });
    this.setData({
      videUrl: video_urls['index0'],//默认播放视频
        });
  },

  // 上一段播放完之后，自动播放下一段视频
  playEnd: function () {
    console.log("结束，下一个"+this.data.videUrl)
    if (videoPage >= video_urls.length) {
      //当前播放的是最后一个视频
      videoPage = 1;
      this.setData({
        videUrl: ''
      });
      this.setData({
        videUrl: video_urls['index0']
      });
    } else {
      videoPage++;
      if (isDefault) {
        if (btn_type == 2 && isFinished) {
          //说话结束
          isDefault = false;
          var index = 'index' + videoPage;
          this.setData({
            videUrl: ''
          });
          this.setData({
            videUrl: video_urls[index]
          });
        } else {
          //测评未开始或说话未结束，继续播放默认视频
          this.setData({
            videUrl: ''
          });
          this.setData({
            videUrl: video_urls['index0']
          });
        }
      } else {
        //一轮提问结束，播放默认视频等待回答
        isDefault = true;
        this.setData({
          videUrl: ''
        });
        this.setData({
          videUrl: video_urls['index0']
        });
      }

    }
  },
  
  //按钮控制视频播放/停止
  testStart: function (e) {
    if(btn_type==1){
      //开始情绪测评
      console.log("开始情绪测评");
      wx.showToast({
        title: '开始情绪测评',
        icon: '',
        image: '',
        duration: 200,
        mask: true,
      })
      this.videoContext.stop();
      this.setData({
        videUrl: ''
      });
      this.setData({
        videUrl: video_urls['index1']
      });
      this.videoContext.play();
      btn_type = 2;
      this.setData({ btn_txt: "停止测评", }) 
    }else{
      //停止测评，恢复初始状态，播放默认视频
      this.videoContext.stop();
      this.setData({
        videUrl: ''
      });
      this.setData({
        videUrl: video_urls['index0']
      });
      this.videoContext.play();
      videoPage=0;
      isDefault=true;
      isFinished=true;
      btn_type = 1;
      this.setData({ btn_txt: "开始测评", })
    }
  },
  onReady: function () {
    // 页面渲染完成
    this.videoContext = wx.createVideoContext('testVideo')
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})


