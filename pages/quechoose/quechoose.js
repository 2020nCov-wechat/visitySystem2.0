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
  queClick:function(){
    wx.navigateTo({
      // url: '../que2/first/first',
      url:'../stuque/question/question',
    })
  },
  voiceClick:function(){
    wx.navigateTo({
      url: '../motiontest/motiontest',
    })
  }
})