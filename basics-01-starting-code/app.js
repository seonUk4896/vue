const app = Vue.createApp({
  data(){
    return{
      //object return
      courseA : 'learn',
      courseB : '<h2>master</h2>',
      vueLink:'https://vuejs.org'
    }
  },
  methods: {
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber < 0.5){
        return this.courseA
      }else{
        return this.courseB
      }
    }
  }
});

app.mount('#user-goal')