// pages/permit/permit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAgreement: false, // 是否显示用户协议
    submitBtn: false // 是否允许投稿
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  submit: function () {

    wx.setStorageSync('permit', true);

    wx.navigateTo({

      url: '../takephoto/start/start',

    })
    },

  showAgreement: function () {
    wx.navigateTo({
      url: '/pages/license/license',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  // 同意用户协议
  agreeMent: function (event) {
    let that = this;
    if (event.detail.value == "true") {
      that.setData({
        submitBtn: false
      });
    } else {
      that.setData({
        submitBtn: true
      });
    }
  },

  submitBook: function (event) {
    // actType = 1  原创   actType = 2 朗读
    let bookInfo = event.currentTarget.dataset.bookinfo;
    // 因为reader传过来是 0 1 
    bookInfo.actType = (bookInfo.actType - 0) + 1;

    getApp().submitWork(bookInfo.bookId, bookInfo.actType, function (res) {
      console.log(res);
      wx.switchTab({
        url: '../index/index',
        success: function (res) {
          // success
          wx.showToast({
            title: '投稿成功',
            icon: 'success',
            duration: 1000
          });
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      });

    });

  }




})
