const app = Vue.createApp({

  data(){
    return{
      text1:'',
      text2:'',
    }
  },
  methods:{
    clickBtn(){
      alert('경고')
    },

    textType1(e){
      this.text1 = e.target.value
    },

    textType2(e){
      this.text2 = e.target.value
    }

  },


});

app.mount('#assignment');