// pages/quechoose/quechoose.js
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
    var that = this
    var time = setTimeout(function () {
      // that.updateChart()
      that.checkSessionId()
    }, 1000)
  },
  checkSessionId:function(){
    if (!getApp().ifHaveSessionId()) {
      console.log("没有sessionId")
      wx.navigateTo({
        url: '../user/login/login',
      })
    }
  },
  testClick:function(){
    wx.switchTab({
      url: '../my/my',
      success(){
        console.log("success")
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) {
          console.log("null")
          return;
        }
        page.onLoad(); // 执行前一个页面的checkHavePhone方法

      },
      fail:function(e){
        console.log(e)
      }    
    })
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
  yiqinClick:function(){
    wx.navigateTo({
      // url: '../que2/first/first',
      // url: '../stuque/advice/advice',
      url: '../stuque/yiqinQue/yiqinQue',
    })
  },
  queClick:function(){
    wx.navigateTo({
      // url: '../que2/first/first',
      url:'../stuque/question/question',
    })
  },
  voiceClick:function(){
    wx.navigateTo({
      url: '../picture/picture',
      // url: '../motiontest/motiontest',
    })
  },
  ansClick: function () {
    wx.navigateTo({
      // url: '../que2/first/first',
      url: '../ansQue/ansQue',
    })
  },
})