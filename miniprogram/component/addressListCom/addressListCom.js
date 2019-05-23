Component({
  properties: {
    list: Array
  },
  data(){
    
  },

  methods: {
    onLoad() {
      console.log('----', this.properties.list)
    }
  }
})