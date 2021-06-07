<template>
  <div class="hello">
    <div class="w3-bar w3-border w3-card-4 w3-light-grey">
  <a href="#" class="w3-bar-item w3-button">Home</a>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>
  <p> this is  hello world page
  {{info}}</p>
  <button v-on:click="submit">get data</button>
   <button v-on:click="getimage"> get image</button>
  <button v-on:click="logout">LOGOUT</button>
  </div>
</template>

<script>
import 'w3-css/w3.css';
import axios from 'axios'
export default {

  data () {
    return {
      info:'',
      msg: 'Welcome to Your Vue.js App',
      redirect:'',
    }
  },


  methods:  {
    submit() {  axios.get('http://localhost:8081/data')

    .then(response => {
    this.info=response.data.data;
    })
    .catch(error => {
        console.log(error)
    });


},
logout(){
   axios.get('http://localhost:8081/logout')
   .then(response => {
     this.dispatch('')
     if(response.data.redirect){

       this.$router.push({ name: 'Login' });
     }
console.log(response);
})
.catch(error => {
    console.log(error);
});

},

getimage(){
  axios.get('http://dzv3x7dp5p69n.cloudfront.net/seema.PNG')
     .then(response => {


  console.log(response);
  })
  .catch(error => {
      console.log(error);
  });


},
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
