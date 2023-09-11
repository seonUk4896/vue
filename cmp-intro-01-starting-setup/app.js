const app = Vue.createApp({
  data(){
    return{
      friends: [
        {
          id:'manuel', 
          name:'홍길동', 
          phone:'010-1234-5678', 
          email:'test@gamil.com'
        },
        {
          id:'manuel2', 
          name:'홍길동2', 
          phone:'010-1234-5679', 
          email:'test@gamil.cocm'
        },
      ]
    }
  },
})

app.component('friend-contact',{
  template: `
  <li v-for="friend in friends" :key="friend.id">
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetail">{{datailVisible ? 'hide' : 'show'}} Details</button>
      <ul v-if="datailVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> m{{friend.email}}</li>
      </ul>
    </li>
  `,
  data(){
    return{
      datailVisible: false,
      friends: [
        {
          id:'manuel', 
          name:'홍길동', 
          phone:'010-1234-5678', 
          email:'test@gamil.com'
        },
      ]
    }
  },
  methods:{
    toggleDetail(){
      this.datailVisible = !this.datailVisible
    }
  }
})

app.mount('#app')