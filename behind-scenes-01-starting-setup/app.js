const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText)
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created(){
    console.log('created()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
});

app.mount('#app');

setTimeout(function(){
  app.unmount()
},3000)

const app2 = Vue.createApp({
  template:`
  <p>{{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal:'pizza'
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app2.mount('#app2');
