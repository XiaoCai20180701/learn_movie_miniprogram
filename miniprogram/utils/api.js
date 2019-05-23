export const API_URL = ""

function api(type, params, method) {
  return new Promise((res, rej)=> {
    wx.request({
      // url: `${API_URL}/${type}`,
      url: `${type}`,
      data: params,
      methods: method || 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res,
      fail: rej
    })
  })
}

module.exports = {

  //获取分类
  getClassify: function(type,data,method) {
    return api(type,data,method).then(res => {res.data})
  }
}