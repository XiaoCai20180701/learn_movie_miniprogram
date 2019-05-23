// pages/addressAdd/addressAdd.js
const areaList = require("../../utils/area.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    username: '',
    tel: '',
    address: '',
    addressDetail:'',
    code:'',
    show: false,
    carmodel: '',
    areaList: areaList.areaList,
    error: false
  },
   /**
   * 打开 省/市/区 弹窗
   */
  showPopup: function(){
    this.setData({
      show: !this.data.show
    })
  },
  onConfirm: function(a){
    console.log('data---',a)
    let value = a.detail.values[0].name + ' ' + a.detail.values[1].name + ' ' + a.detail.values[2].name
    this.setData({
      show: false,
      address: value
    })
  },
  onCancel: function(){
    this.setData({
      show: false
    })
  },
  onChange(picker) {
   // console.log('picker',picker)
    let areaName = ''
    let value = picker.detail.picker.children
    for (var i = 0; i < value.length; i++) {
      areaName = areaName + value[i].name + ' '
    }
    this.address = areaName
  },
  changeAddress: function(e){
    this.setData({
      checked: e.detail
    })
  },
  setValue: function(type,value){
    this.setData({
      [type]: value
    })
  },
  getUserName(e){
    this.setValue('username',e.detail)
  },
  getTel(e) {
    this.setValue('tel', e.detail)
  },
  getAddressDetail(e) {
    this.setValue('addressDetail', e.detail)
  },
  getCode(e) {
    this.setValue('code', e.detail)
  },
  handleSave: function(){
    if(this.data.username && this.data.tel && this.data.address) {
      wx.showToast({
        title: '保存成功',
      })
    }else {
     this.setValue('error',true)
    }
  },
  handleCancel: function(){
    wx.redirectTo({
      url: '/pages/addressList/addressList',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('参数',options)
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