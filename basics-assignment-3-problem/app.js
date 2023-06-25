const app = Vue.createApp({

  data(){
    return{
      counter: 0,
      text: 'Not there yet'
    }
  },
  methods:{
    add(num){
      this.counter = this.counter + num
    }

  },
  watch:{
    counter(value){
      if(value > 37){
        this.text = 'Too much'
      }else{
        this.text = 'Not there yet'
      }
    }
  }


});
app.mount('#assignment');