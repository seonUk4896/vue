const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      taskList:[],
      visible: true
    };
  },
  methods:{
    addTask(){
      this.taskList.push(this.inputTask)
    },
    toggle(){
      this.visible = !this.visible
    }
  }
});

app.mount('#assignment');
