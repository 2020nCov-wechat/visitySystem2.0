//motiontest.js
const util = require('../../utils/util.js')
import Notify from '@vant/weapp/notify/notify';
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
var app = getApp()
var ctx = wx.createCameraContext() //摄像头
//拍照定时器
var time = null;
var timeVideoStart = null;//定时开启拍摄
var timeVideoStop = null;//定时开启结束拍摄并上传
//语音识别相关
const plugin = requirePlugin("WechatSI")
import { language } from '../../utils/voiceConf.js'
// 获取**全局唯一**的语音识别管理器**recordRecoManager**
const manager = plugin.getRecordRecognitionManager()

// var videoNum = 24;//测评视频数量

var video_urls = {};  //视频url
var videoPage;  //当前播放视频index
var isFinished; // 说话是否结束
var isDefault; // 当前是否默认视频
var btn_type; // 按钮类型，1-开始按钮，2-停止按钮

var videoCommonUrl = "https://follwup.aiwac.net/animations/";
Page({
  data: {
    tips_language: language[0], // 目前只有中文
    recording: false,  // 正在录音
    recordStatus: 0,   // 状态： 0 - 录音中 1- 翻译中 2 - 翻译完成/二次翻译
    currentTranslateVoice: '', // 当前播放语音路径
    bottomButtonDisabled: true, // 底部按钮disabled
    currentTranslate: '',//语音识别结果
    haveDBResult: false,//用于等待后台返回查询结果题号
    // videoNum: 24//测评视频数量
    a: "",//摄像头隐藏
  },

  onLoad: function () {

    this.checkAuth()
    this.initRecord()
    //app.getRecordAuth()
    //更新openid
    //app.updateOpenid()

    video_urls = {};  //视频url
    videoPage = 0;
    // videoNum = 24
    isFinished = true; // 说话是否结束
    isDefault = true; // 当前是否眨眼或开场视频
    btn_type = 1;//开始按钮
    if (btn_type == 1) { this.setData({ btn_txt: "开始测评", }) }

    //测评视频集合,v22、v23为眨眼默认视频
    for (var i = 0; i < getApp().globalData.videoNum; i++) {
      var indexStr = 'index' + (i)
      if (i < 10) {
        video_urls[indexStr] = videoCommonUrl + 'v0' + (i) + '.mp4';
      } else if (i < 100) {
        video_urls[indexStr] = videoCommonUrl + 'v' + (i) + '.mp4';
      }
    }
    console.log(video_urls);

    this.setData({
      videUrl: video_urls['index22'],//默认播放眨眼视频
      // videUrl: video_urls['index0'],
    });
    console.log("初始状态，播放" + this.data.videUrl);

    //拍照定时
    if (app.globalData.takePhotoAuto) {
      console.log('显示')
      //定时器
      this.setTime();
    }
  },

  // 上一段播放完之后，自动播放下一段视频
  playEnd: function () {
    console.log(this.data.videUrl + " 结束，下一个")
    console.log(this.videoPage)
    console.log(getApp().globalData.videoNum)
    if (this.videoPage >= getApp().globalData.videoNum - 3) {
      //当前播放的是最后结束视频，回到初始状态
      console.log("已播放至结束视频")
      this.setData({
        videUrl: video_urls['index22'],
        bottomButtonDisabled: true,
        // videUrl: video_urls['index0']
      });
      console.log("播放" + this.data.videUrl);
      this.videoPage = 0;
      isDefault = true;
      isFinished = true;
      btn_type = 1;
      this.setData({
        btn_txt: "开始测评",
        bottomButtonDisabled: true,
      });

      //提示用户
      Toast.success('情绪评测结束！')
      //跳转至结果
      wx.switchTab({
        url: "/pages/my/my",
        success() {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.updateChart();
        }
      });

    } else {

      if (isDefault) {
        //当前是眨眼或者开场视频
        console.log(isFinished);
        if (btn_type == 2 && isFinished) {
          //说话结束
          this.videoPage++;

          console.log(this.videoPage)
          isDefault = false;
          var index = 'index' + this.videoPage;
          this.setData({
            videUrl: video_urls[index],
            bottomButtonDisabled: true,
          });
          console.log("说话结束，播放" + this.data.videUrl);

          //继续录制视频
          this.startRecordV2()
        } else {
          //测评未开始或说话未结束
          var i = parseInt(this.data.videUrl.charAt(39));//当前眨眼视频序号 2/3
          if (btn_type == 1) {
            this.setData({
              bottomButtonDisabled: true,//测评未开始，不可点击说话
            });
          } else {
            this.setData({
              bottomButtonDisabled: false,
            });
          }
          this.setData({
            videUrl: video_urls['index2' + (5 - i)],
            // videUrl: video_urls['index'+(1-i)]
          });
          this.videoContext.play();
          console.log("播放眨眼视频：" + this.data.videUrl);
        }

      } else {
        //一轮提问结束，播放眨眼视频等待回答
        isDefault = true;
        isFinished = false;
        this.setData({
          videUrl: video_urls['index22'],
          bottomButtonDisabled: false,
          // videUrl: video_urls['index0']
        });
        console.log("等待说话，播放" + this.data.videUrl);
      }

    }
  },

  //按钮控制视频播放/停止
  testStart: function (e) {
    var that = this
    if (btn_type == 1) {
      //检查上一次情绪评测的结果：
      //this.checkExam(1)
      //this.checkExam(1)
      var newopenid = app.globalData.openid
      var newSession_key = app.globalData.session_key
      newSession_key = newSession_key.replace(/ +/g, '%2B')
      newopenid = newopenid.replace(/ +/g, '%2B')
      util.requestPromise(
        app.globalData.checkOrEndUrl,
        {
          openid: newopenid,
          session_key: newSession_key,
          checkOrEnd: 1
        },
        'POST'
      ).then(res => {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          if (res.data.nextQuestion == -1) {
            that.setData({
              haveDBResult: true,
            })
            that.videoPage = 0

          }
          if (res.data.nextQuestion > 1) {

            that.videoPage = res.data.nextQuestion
          }
          if (res.data.nextQuestion == 1) {

            that.videoPage = 0
          }

          // if (that.videoPage > 1) {
          //   Dialog.alert({
          //     title: '温馨提示',
          //     message: '继续您上一次的回答，请回答第：' + that.videoPage + ' 题'
          //   }).then(() => {
          //     // on close
          //   });
          // }

          if (this.videoPage > 1) {
            Dialog.alert({
              title: '温馨提示',
              message: '继续您上一次的回答，请回答第：' + this.videoPage + ' 题'
            }).then(() => {
              // on close
            });
            isDefault = false;
          }
          //开始情绪测评
          console.log("开始情绪测评");
          that.startRecordV2()
          // const worker = wx.createWorker('/workers/request/index.js');
          // worker.postMessage({
          //   wx:wx,
          //   opt:1
          // });

          // worker.onMessage(function (res) {
          //   console.log('这是主线程打印的')
          //   console.log(res)
          // });
          // wx.showToast({
          //   title: '开始情绪测评',
          //   icon: '',
          //   image: '',
          //   duration: 200,
          //   mask: true,
          // })
          this.videoContext.stop();
          this.setData({
            videUrl: video_urls['index' + this.videoPage]
          });
          this.videoContext.play();
          console.log("测评开始，播放" + this.data.videUrl);

          btn_type = 2;
          this.setData({ btn_txt: "停止测评", })
        }
      })
    } else {
      //停止测评，主动停止，
      Dialog.confirm({
        title: '退出提示',
        message: '提前退出测评，需要重新回答所有问题哦！'
      }).then(() => {
        // on confirm 确认退出评测
        console.log("confirm exam exit")
        //需要发送提前停止信息，让后台删除数据
        this.checkExam(2)
        //恢复初始状态，播放默认视频
        this.videoPage = 0;
        this.videoContext.stop();
        this.setData({
          videUrl: video_urls['index22']
          // videUrl: video_urls['index0']
        });
        this.videoContext.play();
        console.log("测评停止，播放" + this.data.videUrl);
        isDefault = true;
        isFinished = true;
        btn_type = 1;
        this.setData({
          btn_txt: "开始测评",
          bottomButtonDisabled: true,
        })
        this.stopRecordV2()
      }).catch(() => {
        // on cancel
        console.log("cancel exam exit")
        return
      });

    }
  },
  onReady: function () {
    // 页面渲染完成
    this.videoContext = wx.createVideoContext('testVideo')
  },

  /**
  * 按住按钮开始语音识别
    按住按钮的时候传视频上去，这样语音才能获取到麦克风
  */
  streamRecord: function (e) {
    this.stopRecordV2()
    // worker.postMessage({
    //   wx: wx,
    //   opt: 2
    // });
    // console.log("按下按钮")
    // console.log(e)
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
    console.log("init record")
    //有新的识别内容返回，则会调用此事件
    manager.onRecognize = (res) => {
      console.log("on reg")
      console.log(res)
      let currentData = res.result
      this.setData({
        currentTranslate: currentData,
      })
      //this.scrollToNew();
      this.showResultByNotify(res.result)
    }

    // 识别结束事件
    manager.onStop = (res) => {

      console.log("识别结束")
      console.log(res)
      console.log(res.result)
      this.showResultByNotify(res.result)
      let text = res.result
      if (text == '') {
        this.showRecordEmptyTip()
        return
      } else {
        //发送识别结果给后台
        this.sendResult(res.result, this.videoPage)
      }

      this.setData({
        recording: false,
        bottomButtonDisabled: false,
      })

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
  /**
 * 识别内容为空时的反馈
 */
  showRecordEmptyTip: function () {
    this.setData({
      recording: false,
      bottomButtonDisabled: false,
    })
    Toast.fail('请说话');
  },

  /**
   * 查询当前测试的状态
   * 发送参数：
   *        checkOrEnd:1：查询
   *                   2：提前结束，非正常结束，删除本次数据
   *                   3：正常结束，标志位设置为1，评测结束
   * 返回1-22：正常题目
   * 返回-1：超时，直接删标志位为0的数据，小程序会从第一题开始发起回答
   */
  checkExam: function (checkCode) {
    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')
    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.checkOrEndUrl,
      data: {
        openid: newopenid,
        session_key: newSession_key,
        checkOrEnd: checkCode
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          if (res.data.nextQuestion == -1) {
            that.setData({
              haveDBResult: true,

            })
            that.videoPage = 1
          }
          if (res.data.nextQuestion >= 1) {
            that.setData({
              haveDBResult: true,

            })
            that.videoPage = res.data.nextQuestion
          }
        } else {
          console.log()
          //that.showResultByNotify('错误码：' + res.data.errorCode)
          //登录过期
          // if (res.data.errorCode == 500) {
          //   //更新openid
          //   getApp().updateOpenid()
          //   var time = setTimeout(function () {
          //     that.checkExam(checkCode)
          //   }, 1000)
          // }
          //Toast.fail('错误码：' + res.data.errorCode);
          //Toast.fail('未识别，请重新回答');
        }
        // that.setData({
        //   currentDate: res.data.birthday,
        //   userDate: timeTwo.formatTimeTwo(parseInt(res.data.birthday), 'Y年M月D日'),
        //   sex: res.data.gender,
        //   tabs: res.data.tabs,
        // })
      }
    })

    //结束事件
    if (checkCode == 2 || checkCode == 3) {
      //this.videoPage=0;
    }
  },
  //发送语音识别结果给后台
  sendResult: function (resultMsg, videoPage) {
    var newopenid = app.globalData.openid
    var newSession_key = app.globalData.session_key
    newSession_key = newSession_key.replace(/ +/g, '%2B')
    newopenid = newopenid.replace(/ +/g, '%2B')
    console.log(resultMsg + ' ' + videoPage)
    var that = this
    wx.request({
      //获取openid接口
      url: getApp().globalData.sendResultUrl,//gai url
      data: {
        openid: newopenid,
        session_key: newSession_key,
        question: videoPage,
        answer: resultMsg,
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data.errorCode == 200) {
          isFinished = true
        }
        if (res.data.errorCode == 504) {
          if (res.data.nextQuestion > 1) {
            that.videoPage = res.data.nextQuestion - 1;
            isFinished = true;
          }

        }
        if (res.data.errorCode == 500) {
          Toast.fail('我听不清楚，请重新说话哦！');
        }
        // //登录过期
        // if(res.data.errorCode == 500){
        //   //更新openid
        //   getApp().updateOpenid()
        //   var time = setTimeout(function () {
        //     that.sendResult(resultMsg, videoPage)
        //   }, 1000)
        // }
        //最后一道题目，发送checkExam(3)给后台
        if (videoPage == 20) {
          console.log("最后一道题目send 3 ");
          that.checkExam(3)
        }
        //that.stopRecordV2()
      }
    })
  },

  //弃用
  //==============================拍照v1========================
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
        if (getApp().globalData.showPicUpload) {
          console.log("上传成功")
          // wx.showToast({
          //   title: '图片上传成功',
          //   icon: 'success',
          //   duration: 2000
          // })
        }

      }
    })
  },
  //关闭定时器
  stoptime: function () {
    console.log('定时停止')
    clearInterval(time)
  },
  //拍照函数
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
  //开启定时器
  startime: function () {
    console.log('开启拍照')
    this.setTime();
  },
  //==============================拍照v1========================

  //==============================视频拍摄========================
  //拍照
  takePhotoV2: function () {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          picInVSrc: res.tempImagePath
        })
      }
    })
  },
  //开启视频录制
  startRecordV2: function () {
    // console.log("开启录制")
    // var ctx = wx.createCameraContext() //摄像头
    // ctx.startRecord({
    //   success: (res) => {
    //     console.log('startRecord')
    //   }
    // })
  },
  //停止录制视频，获得视频路径
  stopRecordV2: function () {
    // console.log("停止录制")
    // var that = this
    // var ctx = wx.createCameraContext() //摄像头
    // ctx.stopRecord({
    //   success: (res) => {
    //     this.setData({
    //       picInVSrc: res.tempThumbPath,//视频封面
    //       videoInVSrc: res.tempVideoPath
    //     })
    //     that.uploadVideo(res.tempVideoPath)
    //   }
    // })
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
    var that = this
    wx.uploadFile({
      url: getApp().globalData.uploadPicVidUrl, //图片上传服务器真实的接口地址
      filePath: videoPath,
      name: 'file',
      formData: {
        openid: newopenid,
        session_key: newSession_key,
        picOrVid: 2,
        fileName: videoPath,
        question: this.videoPage
      },
      success: function (res) {
        console.log('视频上传成功')
        console.log(res)
        // wx.showToast({
        //   title: '视频上传成功',
        //   icon: 'success',
        //   duration: 2000
        // })
      }
    })
  },
  // //定时器摄像
  // setTimeVIdeo: function () {
  //   let that = this
  //   timeVideoStart = setInterval(function () {
  //     console.log('开始拍摄')
  //     //拍照
  //     that.startRecordV2()

  //   }, getApp().globalData.takePhotoTime) //循环间隔 单位ms
  // },
  hindCamera: function () {
    console.log("hind")

    var ctx = wx.createCameraContext(this)
    this.checkAuth()
    this.setData({
      cameraShow: "hide",
    })
  },
  //==============================视频拍摄========================

  //==============================权限========================
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
        } else if (!res.authSetting['scope.record']) {     //获取录音权限
          wx.authorize({
            scope: 'scope.record',
            success() {
              console.log('授权成功')
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '请允许小艾使用麦克风，否则无法对您进行准确评测哦~',
                showCancel: false,
                success(res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success: (res) => {
                        if (!res.authSetting['scope.record']) {
                          wx.authorize({
                            scope: 'scope.record',
                            success() {
                              console.log('授权成功')
                            }, fail() {
                              console.log('用户点击取消')
                            }
                          })
                        }
                      },
                      fail: function () {
                        console.log("授权设置录音失败");
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
  },
  //==============================权限========================


  //展示通知内容
  showResultByNotify: function (msg) {
    Notify({
      type: 'primary',
      message: msg
    });
  },
  //点击按钮展示通知内容
  showNotifyByType: function (event) {
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


