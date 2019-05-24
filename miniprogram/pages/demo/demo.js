// pages/demo/demo.js
const db = wx.cloud.database();  //初始化云数据库
const query = wx.createSelectorQuery()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    actions: [],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  insert: function() {
    db.collection('user').add({
      data: {
        name: 'jerry',
        age: 20
      },
      sucess: res => {

      }
    })
  },
  // 设置隐藏  在最外层page里改变了show的值，触发transition.js中show的observer函数，导致所有的动画执行
  toggle(type) {
    console.log('type',type)
    console.log('show1-----before',this.data.show1)
    this.setData({
      [type]: !this.data[type]
    });
    console.log('show1-----after', this.data.show1)
  },

  // 调用方法
  toggleActionsheet1() {
    console.log('toggle')
    this.toggle('show1');
  },
  toggleActionsheet2() {
    console.log('toggle2')
  //  this.toggle('show2');
  this.setData({
    show2: true
  })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      actions: [
        { name: '选项' },
        { name: '选项', subname: '禁用' },
        { name: '选项', loading: true },
        { name: '禁用选项', disabled: true }
      ]
    });
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
})