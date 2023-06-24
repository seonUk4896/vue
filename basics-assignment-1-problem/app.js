const app = Vue.createApp({
  data(){
    return{
      name : '백선욱',
      age : 30,
      url: 'https://www.classboxenglish.com/img/new2/icon_check.png'
    }
  },
  methods:{
    agePlus(){
      return this.age + 5
    },
    favorNum(){
      const randomNum = Math.random()
      return randomNum.toFixed(1)
    }
  }

}).mount('#assignment')