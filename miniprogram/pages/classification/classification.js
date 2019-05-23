// pages/classification/classification.js
const api = require('../../utils/api.js');
const jsonData = require('../../utils/json.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyItems: [],
    curNav: 1,
    curIndex: 1
  },
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    console.log('--------------',e)
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
      // 把点击到的某一项，设为当前index  
      this.setData({
        curNav: id,
        curIndex: index
      })
      console.log('id',this.data.curNav)
  },
  getList() {
    // api.getClassify('json/classification',{},'GET')
    //    .then(res => {
    //      console.log('列表：',res)
    //    })
    console.log('list',jsonData.classifyData)
    this.setData({
      classifyItems: jsonData.classifyData
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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