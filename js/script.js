const { createApp } = Vue

createApp({
  data() {
    return {
      emailList: []
    }
  },
  methods: {
   getRandomEmail(num){
    for (let i = 0; i <= num ; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => this.emailList.push(response.data.response))
    }
   },
  },
  created(){
    this.getRandomEmail(10)
  }
}).mount('#app')