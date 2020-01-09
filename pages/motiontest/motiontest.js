//motiontest.js
const util = require('../../utils/util.js')
import Notify from '@vant/weapp/notify/notify';

//语音识别相关
const plugin = requirePlugin("WechatSI")
import { language } from '../../utils/voiceConf.js'
// 获取**全局唯一**的语音识别管理器**recordRecoManager**
const manager = plugin.getRecordRecognitionManager()

var video_urls = {};  //视频url
var videoPage;  //当前播放视频
var pageArr = new Array()  //存储视频队列长度
var isFinished; // 说话是否结束,需要算法监测
var isDefault; // 当前是否默认视频
var btn_type; // 按钮类型，1-开始按钮，2-停止按钮
var videoNum = 12;//测评视频数量
var videoCommonUrl ="http://followup.aiwac.net/animations/";
Page({
  data: {
    tips_language: language[0], // 目前只有中文
    recording: false,  // 正在录音
    recordStatus: 0,   // 状态： 0 - 录音中 1- 翻译中 2 - 翻译完成/二次翻译
    currentTranslateVoice: '', // 当前播放语音路径
    bottomButtonDisabled: false, // 底部按钮disabled
    currentTranslate:'',//语音识别结果
  },

  onLoad: function () {

    video_urls = {};  //视频url
    videoPage = 0;  //当前播放视频
    pageArr = new Array()  //存储视频队列长度
    isFinished = true; // 说话是否结束
    isDefault = true; // 当前是否默认视频
    btn_type = 1;//开始按钮
    if (btn_type == 1) { this.setData({ btn_txt: "开始测评", })}


    // //测评视频集合,v00为眨眼默认视频
    // for (var i = 0; i < videoNum; i++) {
    //   var indexStr = 'index' + (i)
    //   if(i<10){
    //     video_urls[indexStr] = videoCommonUrl + 'v0'+(i)+'.mp4';
    //   }else if(i<100){
    //     video_urls[indexStr] = videoCommonUrl + 'v' + (i) + '.mp4';
    //   }
    // }
    // this.setData({
    //   videUrl: video_urls['index0'],//默认播放视频
    // });
    // this.setData({
    //   videUrl: video_urls['index0'],//默认播放视频
    //     });
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

  /**
  * 按住按钮开始语音识别
  */
  streamRecord: function (e) {
    console.log("按下按钮")
    console.log(e)
    // console.log("streamrecord" ,e)
    // let detail = e.detail || {}
    // let buttonItem = detail.buttonItem || {}
    // manager.start({
    //   lang: buttonItem.lang,
    // })
    manager.start()
    this.setData({
      recordStatus: 0,
      recording: true,
      // currentTranslate: {
      //   // 当前语音输入内容
      //   create: util.recordTime(new Date()),
      //   text: '正在聆听中',
      //   lfrom: buttonItem.lang,
      //   lto: buttonItem.lto,
      // },
    })
  },
  /**
  * 松开按钮结束语音录制，等待识别结果
  */
  streamRecordEnd: function (e) {
    console.log("松开按钮")
    console.log(e)

    // console.log("streamRecordEnd" ,e)
    // let detail = e.detail || {}  // 自定义组件触发事件时提供的detail对象
    // let buttonItem = detail.buttonItem || {}

    // 防止重复触发stop函数
    if (!this.data.recording || this.data.recordStatus != 0) {
      console.warn("has finished!")
      return
    }

    manager.stop()

    this.setData({
      bottomButtonDisabled: true,
    })
  },
  /**
  * 初始化语音识别回调
  * 绑定语音播放开始事件
  */
  initRecord: function () {
    
    //有新的识别内容返回，则会调用此事件
    manager.onRecognize = (res) => {

      console.log("识别内容返回")
      console.log(res)
      let currentData = res.result
      this.setData({
        currentTranslate: currentData,
      })
      //this.scrollToNew();
      showResultByNotify(res.result)
    }

    // 识别结束事件
    manager.onStop = (res) => {

      console.log("识别结束")
      console.log(res)
      let text = res.result

      if (text == '') {
        this.showRecordEmptyTip()
        return
      }

      // let lastId = this.data.lastId + 1

      // let currentData = Object.assign({}, this.data.currentTranslate, {
      //   text: res.result,
      //   translateText: '正在翻译中',
      //   id: lastId,
      //   voicePath: res.tempFilePath
      // })

      // this.setData({
      //   currentTranslate: currentData,
      //   recordStatus: 1,
      //   lastId: lastId,
      // })

      // this.scrollToNew();

      // this.translateText(currentData, this.data.dialogList.length)
    }

    // 识别错误事件
    manager.onError = (res) => {

      console.log("识别错误")
      console.log(res)
      this.setData({
        recording: false,
        bottomButtonDisabled: false,
      })

    }

    // 语音播放开始事件
    wx.onBackgroundAudioPlay(res => {

      const backgroundAudioManager = wx.getBackgroundAudioManager()
      let src = backgroundAudioManager.src

      this.setData({
        currentTranslateVoice: src
      })

    })
  },


  //展示通知内容
  showResultByNotify:function(msg){
    Notify({
      type: 'primary',
      message: msg
    });
  },
  //点击按钮展示通知内容
  showNotifyByType:function(event) {
    const { type } = event.currentTarget.dataset;
    Notify({
      type: 'primary',
      message: '通知内容'
    });
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


