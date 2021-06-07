<template>
  <div class="login">
    <div class="w3-bar w3-border w3-card-2 w3-white w3-margin-bottom ">
     <a href="#" class=" w3-site-font w3-bar-item w3-button">Hotpager</a>
     <a href="#" class="w3-bar-item w3-button w3-right"></a>
     <a href="#" class="w3-bar-item w3-button w3-right"></a>
     <a href="#" class="w3-bar-item w3-button w3-right"></a>
   </div>

<!-- for small screen   -->
<div class="w3-row w3-hide-large w3-hide-medium">
<div class=" w3-content  w3-container w3-col   s12 w3-hide-large w3-hide-medium">

  <form class=" w3-container w3-padding-64 w3-card w3-round-large ">

   <label for="username">Username:</label><br>
   <input class="w3-input" type="text"  name="username" value="John" v-model="username"><br>
   <br/>
   <label  for="password">Password:</label><br>
   <input class="w3-input" type="password" name="password" value="Doe" v-model="password">
   <br/>
   <br/>
   <button class="w3-button w3-light-grey w3-border" type="button" v-on:click="submit">Signin</button><br>
   <br>
   <a href=""  v-on:click="register">Create new account</a>
   <span v-if="authenticated">

     <p ><li class="w3-text-red">username or password wrong</li></p>
   </span>

  </form>
</div>

</div>

<!-- for large screen-->


  <div class="  w3-container  w3-hide-small w3-hide-medium">

  <form class=" w3-container w3-customlarge w3-padding-64 w3-card w3-round-large  " style="width:450px;">

   <label for="username">Username:</label><br>
   <input class="w3-input" type="text"  name="username" value="John" v-model="username"><br>
   <br/>
   <label for="password">Password:</label><br>
   <input class="w3-input" type="password"  name="password" value="Doe" v-model="password">
   <br/>
   <br/>
   <button class="w3-button w3-light-grey w3-border" type="button" v-on:click="submit">SignIn</button><br>
   <br>
   <a href="" v-on:click="register">Create new account</a>

   <span v-if="authenticated">
     <p class="">
       <li class="w3-text-red">username or password wrong</li>
     </p>
  </span>
   </form>
   </div>

   <!--for medium screen-->
   <div class=" w3-content  w3-container  w3-hide-small w3-hide-large">

   <form class=" w3-container w3-custommedium w3-padding-64 w3-card w3-round-large " style="width:400px;">

    <label for="username">Username:</label><br>
    <input class="w3-input" type="text"  name="username" value="John" v-model="username"><br>
    <br/>
    <label for="password">Password:</label><br>
    <input class="w3-input" type="password"  name="password" value="Doe" v-model="password">
    <br/>
    <br/>
    <button class="w3-button w3-light-grey w3-border" type="button" v-on:click="submit">Signin</button><br>
    <br>
    <a href="" style="align:center;" v-on:click="register">Create new account</a>
    <span  v-if="authenticated">

      <p >
        <li class="w3-text-red">username or password wrong</li>

      </p>
    </span>
    </form>
    </div>



</div>
</template>

<script>
import axios from 'axios';
import 'w3-css/w3.css';
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      password:'',
      authenticated:false,
    }
  },
  computed:{



  },
  methods:  {
    submit() {  axios.post('http://localhost:8081/login',{username:this.username,password:this.password})

    .then(response => {
      this.authenticated=response.data.authenticated;
      console.log(response.data);
      this.$store.dispatch('userupdate',this.response.data);
     if(response.data.redirect){
       this.$router.push({ name: 'HelloWorld' });

     }
    })
    .catch(error => {
        console.log(error);
    });
},
register(){

     this.$router.push({name:'FrontPage'});




},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.w3-site-font {
  font-family:"Tangerine" , sans-serif;
  font-size:40px;
  text:bold;
}
.w3-customlarge {

  margin:auto;

}
.w3-custommedium{
  margin:auto;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
