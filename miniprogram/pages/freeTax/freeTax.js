// pages/freeTax/freeTax.js
const db = wx.cloud.database();
const data = require('../../utils/json.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://c.vpimg1.com/upcb/2019/04/24/167/ias_155608620363820_570x273_90.jpg',
      'https://c.vpimg1.com/upcb/2019/05/22/105/ias_155850687943056_570x273_90.jpg',
      'https://c.vpimg1.com/upcb/2019/05/21/191/ias_155841588375135_570x273_90.jpg',
      'https://c.vpimg1.com/upcb/2019/05/17/8/ias_155808797631578_570x273_90.jpg',
      'https://c.vpimg1.com/upcb/2019/03/20/162/ias_155306793580917_570x273_90.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 500,
    themePicList: data.themePicList,
    globalPicList: data.globalPicList
  },
  gotoDetail(){
    wx.navigateTo({
      url: '/pages/freeTax/freeTaxDetail',
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})