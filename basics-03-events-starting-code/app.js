const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:'',
      //fullname:'',
      lastName:'',
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm(){
      alert('제출완')
    },
    add(num){
      this.counter = this.counter + num
    },
    reduce(num){
      this.counter = this.counter - num
    },
    updat(e){
      this.name = e.target.value;
    },
    resetInput(){
      this.name = '';
    },
  },
  computed:{
    fullname(){
      console.log('cpm')
      if(this.name==='' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName
    }
  },
  watch:{
    // name(value){
    //   if(this.name===''){
    //     this.fullname = '';
    //   }
    //   this.fullname = value + ' '+ this.lastName
    // },

    // lastName(value){
    //   if(this.name===''){
    //     this.fullname = '';
    //   }
    //   this.fullname = this.name + ' '+ value
    // },

    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }

  }
});

app.mount('#events');
