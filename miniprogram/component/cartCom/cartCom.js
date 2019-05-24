Component({
  properties: {
    obj: Object
  },
  data:{
    isFirst: true,
    count: 1
  },
  methods:{
    setValue(num){
      this.setData({
        count: num,
        isFirst: false
      })
    },
    handleReduce(e) {
      let dataset = e.currentTarget.dataset
      let num = dataset.count - 1 < 1 ? 1 : dataset.count - 1
      this.setValue(num)
    },
    handleAdd(e) {
      let dataset = e.currentTarget.dataset 
      this.setValue(dataset.count + 1)
    },
    changeCount(e) {
      this.setValue(e.detail)
    },
    handleCount() {
      console.log('阻止输入框点击事件冒泡')
    }
  }
})