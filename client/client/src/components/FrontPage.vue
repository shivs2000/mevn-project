<template>
  <div class=" frontpage">


    <div class="w3-custom-nav w3-bar w3-border w3-card-2 w3-white" id="navbar">
  <a href="" class=" w3-site-font w3-bar-item w3-button">Hotpager</a>
  <a href="#" class="w3-bar-item w3-button w3-right"></a>
  <a href="#" class="w3-bar-item w3-button w3-right"></a>
  <a href="#" class="w3-bar-item w3-button w3-right"></a>
</div>
<div class="w3-row">
    <div class=" w3-custom-overflow w3-container w3-col l5 s12 m12" >
     <form class=" w3-container w3-card w3-padding-64 w3-round-large" >
     <label for="username">Username:</label><br>
     <input class="w3-input" type="text" id="username" name="username" value="" v-on:click="usernameerase" v-model="username">
     <br>
     <span v-if="usernameerror">
       <P class="w3-text-red">
         <li>enter the username</li>
       </p>
     </span>
     <label for="email">Email:</label><br>
     <input class="w3-input" type="email" id="email" name="email" value="" v-on:click="emailerase" v-model="email">
     <br/>
     <span v-if="emailerror">
       <P class="w3-text-red">
         <li>enter the email</li>
       </p>
     </span>

     <label for="password">Password:</label><br>
     <input class="w3-input" type="password"  v-on:click="erase"  v-on:change="validatepassword" name="password" value="" v-model="password">
     <br>
      <span v-if="error">
        <P class="w3-text-red" v-for="errors in errors" :key="errors">
          <li>{{errors}}</li>
        </p>
      </span>
      <span v-if="passworderror">
        <P class="w3-text-red">
          <li>enter the password</li>
        </p>
      </span>


     <label for="confirmpassword">Confirm Password:</label><br>
     <input class="w3-input" type="password" name="confirmpassword" v-on:click="confirmpassworderase" v-on:change="comparepassword" value="" v-model="ConfirmPassword">
     <br>
     <span v-if="confirmerror">
       <p class="w3-text-red">
         <li>password not same</li>
       </p>
     </span>
     <label for="gender">Gender:</label>
     <br>

     <P><input class="w3-radio" type="radio" id="male" value="male" v-on:click="pickederase" v-model="picked">
     <label for="male">Male</label>
     </p>
     <br>
     <input class="w3-radio" type="radio" id="female" value="female" v-on:click="pickederase" v-model="picked">
     <label for="female">Female</label>
     <br/>
     <span v-if="pickederror">
       <P class="w3-text-red">
         <li>select gender</li>
       </p>
     </span>

     <br/>

     <button class="w3-button w3-light-grey w3-border " type="button" v-on:click="submit">SignUp</button>
   </form>

 </div>
</div>



  </div>
</template>





<script>
import axios from 'axios'
import 'w3-css/w3.css';
export default {

  data () {

    return{
      rules: [
				{ message:'One lowercase letter required.', regex:/[a-z]+/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"8 characters minimum.", regex:/.{8,}/ },
				{ message:"One number required.", regex:/[0-9]+/ }
			],
      errors:[],
      picked:'',
      length:0,
      error:false,
      confirmerror:false,
      usernameerror:false,
      pickederror:false,
      emailerror:false,
      passworderror:false,
    email:'',
    password:'',
    username:'',
    ConfirmPassword:'',
    data:'',
  }
}
  ,

  methods:  {
    erase(){
      this.errors=[];
      this.error=false;
      this.passworderror=false;
    },
    emailerase(){
    this.emailerror=false;
    },
    usernameerase(){
    this.usernameerror=false;
    },
    passworderase(){
    this.passworderror=false;
    },
    confirmpassworderase(){
    this.confirmerror=false;
    },
    pickederase(){
      this.pickederror=false;
    },

    submit() {

      if(_.isEmpty(this.email) ){
        this.emailerror=true;
      }
       if(_.isEmpty(this.picked)){
        this.pickederror=true;

      }
      if(_.isEmpty(this.ConfirmPassword)){
       this.confirmerror=true;
      }
      if(_.isEmpty(this.password)){
      this.passworderror=true;
      }
       if(_.isEmpty(this.username)){
        this.usernameerror=true;

      }
      else { axios.post('http://localhost:8081/register',{username:this.username,email:this.email,
        password:this.password,gender:this.picked})

    .then(response => {
     console.log(response.data);
     this.$store.dispatch('userupdate',this.response.data);
     if(response.data.redirect){
       this.$router.push({name:'HelloWorld'});
     }
    })
    .catch(error => {
        console.log(error);
    });
  }
},
scroll(){


  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
},
validatepassword(){
  for (let condition of this.rules) {

				if (!condition.regex.test(this.password)) {
					this.errors.push(condition.message)
				}
			}
      if (this.errors.length === 0) {
          this.error=false;

			} else {
				this.error=true;
        this.password='';

			}


},
comparepassword(){
  if(this.password!==this.ConfirmPassword){
    this.confirmerror=true;
    this.ConfirmPassword='';
  }
  else{
    this.error=false;
  }


}

},
mounted()
{
this.scroll();
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w3-site-font{

  font-family:"Tangerine" , sans-serif;
  font-size:40px;
  text:bold;
}
.w3-custom-nav{
  overflow: auto;

}
.w3-custom-overflow{
padding:16px;
}

.sticky {
  position: sticky;
  top: 0;
  width: 100%;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}


</style>
